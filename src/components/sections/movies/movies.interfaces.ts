import { IMovie } from 'src/interfaces/movie.interfaces';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface IMoviesProps
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {
    movies: IMovie[]
  }
