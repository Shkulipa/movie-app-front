import { moviesAPI } from 'src/services/movieAPI.service';
import { useParams } from 'react-router-dom';

import { PageLayout, Ptag, Btn, Loader, ErrorMsg } from 'src/components';

import './movie.styles.scss';

export default function Movie(): JSX.Element {
	const { imdbid } = useParams();
	/**
	 * @info
	 * get movie data
	 */
	const {
		data: movie,
		error,
		isLoading
	} = moviesAPI.useFetchPostByIdQuery(imdbid as string, { skip: !imdbid });

	const content = isLoading ? <Loader /> :(
		<>
			<div className='actionPanel'>
				
				<Btn>Delete</Btn>
				<Btn>Edit</Btn>
			</div>

			<Ptag size='s'>imdbid: {imdbid}</Ptag>
			<Ptag size='s'>Title: {movie?.title}</Ptag>
			<Ptag size='s'>Year: {movie?.year}</Ptag>
			<Ptag size='s'>Genre: {movie?.genre}</Ptag>
			<Ptag size='s'>Director: {movie?.director}</Ptag>
		</>
	);
  console.log(movie);
	return (
		<PageLayout>
      {error && <ErrorMsg className='text-center'>Sorry, smth went wrong</ErrorMsg>}
			<div className='moviePage'>{content}</div>
		</PageLayout>
	);
}
