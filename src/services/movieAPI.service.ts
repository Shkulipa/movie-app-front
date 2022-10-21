import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { authSlice } from 'src/store/slices/auth/auth.slice';
import { CONST } from 'src/interfaces/consts.interfaces';
import { IAuthResponse } from 'src/interfaces/user.interfaces';
import { IMovie, IMoviePayload } from 'src/interfaces/movie.interfaces';
import { IFetchPayload } from 'src/interfaces/fetchPosts.interfaces';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers) => {
    const getUser = localStorage.getItem(CONST.LOCAL_STORAGE_USER) as string;
    const parsedUser = getUser && JSON.parse(getUser) as IAuthResponse;
    const accessToken = parsedUser && parsedUser.accessToken;
    if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
  credentials: 'include'
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
      const refreshResult = await baseQuery({
        url: '/refresh-token',
        method: 'POST'
      }, api, extraOptions);
  
      
      if (refreshResult.data) {
        localStorage.setItem(CONST.LOCAL_STORAGE_USER, JSON.stringify(refreshResult.data));

        // retry the initial query
        result = await baseQuery(args, api, extraOptions);
      } else {
        const { setUser } = authSlice.actions;
        
        api.dispatch(setUser(null));
        localStorage.removeItem(CONST.LOCAL_STORAGE_USER);
      }
  }

  return result;
};

export const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Movies"],

  endpoints: (build) => ({
    fetchMovies: build.mutation<IMoviePayload[], IFetchPayload>({
      query: ({ search = "" }) => {
        return {
          url: '/movie',
          method: "POST",
          body: {
            search
          }
        }
      },
      invalidatesTags: () => ["Movies"]
    }),
    fetchPostById: build.query<IMovie, string>({
      query: imdbid => ({
        url: `/movie/${imdbid}`,
        method: "GET",
      }),
      providesTags: () => ["Movies"]
    }),
  })
});
