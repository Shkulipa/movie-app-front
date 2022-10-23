import { useParams } from 'react-router-dom';
import { useAppSelector } from 'src/hooks/redux';
import InfoMovie from './components/infoMovie/infoMovie';
import { moviesAPI } from 'src/services/movieAPI.service';
import useFavoriteBtn from './hooks/useFavoriteBtn/useFavoriteBtn';
import useDeleteMovieBtn from './hooks/useDeleteMovieBtn/useDeleteMovieBtn';
import useModalClickOutside from 'src/hooks/useModalClickOutside';

import { PageLayout, Btn, Loader, ErrorMsg } from 'src/components';

import './movie.styles.scss';
import ModalEdit from './components/modalEdit/modalEdit';
import { useEffect, useState } from 'react';
import { IMovie } from '@src/interfaces/movie.interfaces';

export default function Movie(): JSX.Element {
	const { imdbid } = useParams();
	const { user } = useAppSelector(s => s.auth);

	const {
		data: movie,
		error,
		isLoading,
	} = moviesAPI.useFetchPostByIdQuery(imdbid as string);
	const { errorFavorite, favoriteStart } = useFavoriteBtn({ imdbid: imdbid! });
	const { btnDeleteMovie } = useDeleteMovieBtn({ imdbid: imdbid! });
	const { isOpen, toggleModal, refModal } = useModalClickOutside({
    excludeClickByIds: ['btnEdit']
  });
  const [movieData, setMovieData] = useState<IMovie>();

  useEffect(() => {
    setMovieData(movie)
  }, [movie])

	const isActionPanel = user && (
		<div className='actionPanel'>
			{favoriteStart}
			{btnDeleteMovie}
			<Btn id='btnEdit' onClick={toggleModal}>Edit</Btn>
		</div>
	);

	const infoMovieBLock = !error && !movie?.error && (
		<div className='contenWrapper'>
			{isActionPanel}
			<InfoMovie movie={movieData} />
		</div>
	);

	const content = isLoading ? <Loader /> : infoMovieBLock;

	return (
		<PageLayout>
			{movie?.error && (
				<ErrorMsg className='mt-25 text-center'>{movie.error}</ErrorMsg>
			)}
			{(error || errorFavorite) && (
				<ErrorMsg className='mt-25 text-center'>
					{(error as any).data.message}
				</ErrorMsg>
			)}
			{!error && (
				<div className='moviePage'>
					{content}
          {isOpen && movie && (
            <ModalEdit
              ref={refModal}
              toggleModel={() => {}}
              initialValues={movie}
              imdbid={imdbid!}
              setMovieData={setMovieData}
            />
          )}
				</div>
			)}
		</PageLayout>
	);
}
