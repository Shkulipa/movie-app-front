import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { authSlice } from 'src/store/slices/auth/auth.slice';
import { CONST } from 'src/interfaces/consts.interfaces';
import { IAuthResponse } from 'src/interfaces/user.interfaces';
import { IMoviePayload } from 'src/interfaces/movie.interfaces';
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
    fetchMovies: build.query<IMoviePayload, IFetchPayload>({
      query: ({ search = "" }) => {
         console.log(search) 
        
        return {
          url: '/movie',
          method: "POST",
          body: {
            search
          }
        }
      },
      providesTags: () => ["Movies"]
    }),
    // fetchPostById: build.query<IPost, string>({
    //   query: (id) => ({
    //     url: `/post/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: () => ["Post"]
    // }),
    // createPost: build.mutation<FormData, FormData>({
    //   query: (body) => {
    //     const options = ({
    //       url: "/post",
    //       method: "POST",
    //       body
    //     });

    //     return options;
    //   },
    //   invalidatesTags: ["Post"]
    // }),
    // updatePost: build.mutation<IUpdatePost, IUpdatePost>({
    //   query: (body) => {
    //     const { _id, title, description, content } = body;

    //     const options = ({
    //       url: `/post/${_id}`,
    //       method: "PUT",
    //       body: {
    //         title, description, content
    //       }
    //     });

    //     return options;
    //   },
    //   invalidatesTags: ["Post"]
    // }),
    // deletePost: build.mutation<IUpdatePost, { id: string }>({
    //   query: (body) => {
    //     const { id } = body;

    //     const options = ({
    //       url: `/post/${id}`,
    //       method: "DELETE"
    //     });

    //     return options;
    //   },
    //   invalidatesTags: ["Post"]
    // })
  })
});
