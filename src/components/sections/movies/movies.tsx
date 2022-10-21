import { CardMovie } from 'src/components';
import { IMoviesProps } from './movies.interfaces';
import './movies.styles.scss';

export function Movies({ movies }: IMoviesProps): JSX.Element {
	const mapping = movies.map((movie, idx) => (
		<CardMovie key={movie.id} movie={movie} idx={idx} />
	));

	return <div className='moviesHome'>{mapping}</div>;
}
