import { objKeysToLoweCase } from 'src/helpers/objectKeysLowecase';
import { Link } from 'react-router-dom';
import { Btn } from 'src/components';
import { ICardMovieProps } from './cardMovie.interfaces';
import './cardMovie.styles.scss';

export function CardMovie({ movie, idx }: ICardMovieProps): JSX.Element {
	const { year, title, imdbid } = objKeysToLoweCase(movie);

	return (
		<div className="cardMovie">
			<p>#: {idx + 1}</p>
			<p>year: {year}</p>
			<p>title: {title}</p>

			<Link to={`/movie/${imdbid}`}>
				<Btn>Read more...</Btn>
			</Link>
		</div>
	);
}
