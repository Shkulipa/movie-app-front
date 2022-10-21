import { IMoviePayload } from 'src/interfaces/movie.interfaces';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICardMovieProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    idx: number;
    movie: IMoviePayload;
  }
