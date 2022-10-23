import {
	MutationDefinition,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { IFetchPayload } from 'src/interfaces/fetchPosts.interfaces';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { IMoviePayload } from '@src/interfaces/movie.interfaces';
import { TEmptyObj } from '@src/interfaces/emptyObject.interfaces';

export interface IUseFormSearch {
	fetchMovies: MutationTrigger<
		MutationDefinition<
			IFetchPayload,
			BaseQueryFn<
				string | FetchArgs,
				unknown,
				FetchBaseQueryError,
				TEmptyObj,
				TEmptyObj
			>,
			'Movies',
			IMoviePayload[],
			'moviesAPI'
		>
	>;
}
export interface ISearchProps
	extends PropsWithChildren<
			DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
		>,
		IUseFormSearch {}

export interface ISearchValues {
	search: string;
}
