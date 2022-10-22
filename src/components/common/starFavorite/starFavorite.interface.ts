import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IMovie } from 'src/interfaces/movie.interfaces';

export interface IIsFavoriteProps extends Pick<IMovie, 'isFavorite'> {}

export interface IStarFavoriteProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		Pick<IMovie, 'isFavorite' | 'imdbid'> {}
