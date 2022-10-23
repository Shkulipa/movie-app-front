import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';
import { authSlice } from 'src/store/slices/auth/auth.slice';
import { CONST } from 'src/interfaces/consts.interfaces';
import { IAuthResponse } from 'src/interfaces/user.interfaces';
import {
	IIdMovie,
	IMovie,
	IMoviePayload,
	IMoviesFavoritePayload
} from 'src/interfaces/movie.interfaces';
import { IFetchPayload } from 'src/interfaces/fetchPosts.interfaces';
import { TEmptyFunction } from 'src/interfaces/emptyObject.interfaces';
import { IMovieEditPayload } from 'src/components/pages/movie/components/modalEdit/modalEdit.interfaces';
import {
	IMovieCreateResponsePayload,
	IMovieCreateSendPayload
} from 'src/components/pages/createMovie/createMovie.interfaces';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.REACT_APP_API_URL,
	prepareHeaders: headers => {
		const getUser = localStorage.getItem(CONST.LOCAL_STORAGE_USER) as string;
		const parsedUser = getUser && (JSON.parse(getUser) as IAuthResponse);
		const accessToken = parsedUser && parsedUser.accessToken;
		if (accessToken) {
			headers.set('authorization', `Bearer ${accessToken}`);
		}
		return headers;
	},
	credentials: 'include'
});

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result.error && result.error.status === 401) {
		const refreshResult = await baseQuery(
			{
				url: '/refresh-token',
				method: 'POST'
			},
			api,
			extraOptions
		);

		if (refreshResult.data) {
			localStorage.setItem(
				CONST.LOCAL_STORAGE_USER,
				JSON.stringify(refreshResult.data)
			);

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
	tagTypes: ['Movies'],

	endpoints: build => ({
		fetchMovies: build.mutation<IMoviePayload[], IFetchPayload>({
			query: ({ search = '' }) => {
				return {
					url: '/movie',
					method: 'POST',
					body: {
						search
					}
				};
			},
			invalidatesTags: () => ['Movies']
		}),
		fetchPostById: build.query<IMovie, string>({
			query: imdbid => ({
				url: `/movie/${imdbid}`,
				method: 'GET'
			}),
			providesTags: () => []
		}),
		fetchFavoriteMovies: build.query<IMoviesFavoritePayload, TEmptyFunction>({
			query: () => {
				return {
					url: '/movie/favorite/collection',
					method: 'GET'
				};
			},
			providesTags: () => ['Movies']
		}),
		favoriteMovie: build.mutation<null, IIdMovie>({
			query: body => {
				const { imdbid } = body;

				const options = {
					url: `/movie/favorite/${imdbid}`,
					method: 'POST'
				};

				return options;
			},
			invalidatesTags: () => ['Movies']
		}),
		editMovies: build.mutation<{}, IMovieEditPayload>({
			query: body => {
				const { imdbid } = body;

				return {
					url: `/movie/${imdbid}`,
					method: 'PATCH',
					body: {
						...body
					}
				};
			},
			invalidatesTags: () => ['Movies']
		}),
		deleteMovie: build.mutation<null, IIdMovie>({
			query: body => {
				const { imdbid } = body;

				const options = {
					url: `/movie/${imdbid}`,
					method: 'DELETE'
				};

				return options;
			},
			invalidatesTags: ['Movies']
		}),
		createMovie: build.mutation<
			IMovieCreateResponsePayload,
			IMovieCreateSendPayload
		>({
			query: body => {
				return {
					url: `/movie/create`,
					method: 'POST',
					body: {
						...body
					}
				};
			},
			invalidatesTags: () => ['Movies']
		})
	})
});
