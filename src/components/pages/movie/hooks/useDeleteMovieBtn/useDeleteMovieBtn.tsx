import { Btn } from 'src/components';
import { moviesAPI } from 'src/services/movieAPI.service';
import { useNavigate } from 'react-router-dom';
import { IUseDeleteMovieBtnProps } from './useDeleteMovieBtn.interfaces';

export default function useDeleteMovieBtn({ imdbid }: IUseDeleteMovieBtnProps) {
	const history = useNavigate();

	const [
		deleteMovie,
		{ isLoading: isLoadingDeleteMovie, error: errorDeleteMovie }
	] = moviesAPI.useDeleteMovieMutation();
	const deleteMovieHandler = () => {
		deleteMovie({ imdbid });
		if (!errorDeleteMovie) history('/');
	};

	const textBtn = isLoadingDeleteMovie ? 'loading...' : 'Delete';
	const btnDeleteMovie = (
		<Btn onClick={deleteMovieHandler} disabled={isLoadingDeleteMovie}>
			{textBtn}
		</Btn>
	);

	return { btnDeleteMovie };
}
