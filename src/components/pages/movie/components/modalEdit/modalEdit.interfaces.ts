import { IMovie, IValuesMovie } from 'src/interfaces/movie.interfaces';

export interface IModalEditProps extends Pick<IMovie, 'imdbid'> {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	initialValues: IValuesMovie;
	setMovieData: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
}

export interface IMovieEditPayload
	extends IValuesMovie,
		Pick<IMovie, 'imdbid'> {}
