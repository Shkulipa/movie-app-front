import { PageLayout, Movies, Loader, ErrorMsg } from 'src/components';
import Search from './components/search/search';

import { moviesAPI } from 'src/services/movieAPI.service';

import './home.styles.scss';

export default function Home(): JSX.Element {
	const [fetchMovies, { isLoading, error, data }] =
		moviesAPI.useFetchMoviesMutation();

	const content = isLoading ? (
		<Loader className="loaderHome" />
	) : (
		<Movies movies={data || []} />
	);

	return (
		<PageLayout>
			<Search fetchMovies={fetchMovies} />
			{error && (
				<ErrorMsg className="text-center">Sorry, smth went wrong</ErrorMsg>
			)}
			{content}
		</PageLayout>
	);
}
