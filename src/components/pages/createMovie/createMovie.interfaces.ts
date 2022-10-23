import { IMovie } from '@src/interfaces/movie.interfaces';

export interface IMovieCreateResponsePayload
	extends Pick<
		IMovie,
		'id' | 'title' | 'year' | 'runtime' | 'genre' | 'director' | 'imdbid'
	> {}

export interface IMovieCreateSendPayload
	extends Pick<IMovie, 'title' | 'year' | 'runtime' | 'genre' | 'director'> {}
