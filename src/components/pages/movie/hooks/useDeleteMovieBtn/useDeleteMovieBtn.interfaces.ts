import { IMovie } from 'src/interfaces/movie.interfaces';

export interface IUseDeleteMovieBtnProps extends Pick<IMovie, 'imdbid'> {}
