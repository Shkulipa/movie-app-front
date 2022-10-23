import { IMovie } from 'src/interfaces/movie.interfaces';

export interface IUseFavoriteBtnProps
	extends Pick<IMovie, 'isFavorite' | 'imdbid'> {}
