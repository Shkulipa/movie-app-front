import { useState } from 'react';
import { PageLayout, Movies } from 'src/components';
import Search from './components/search/search';

import { moviesAPI } from 'src/services/movieAPI.service';

export default function Home(): JSX.Element {
	const [search, setSearch] = useState<string>('');
  
	const {
		data: movies,
		error,
		isLoading,
		refetch
	} = moviesAPI.useFetchMoviesQuery(
		{ search },
    {
      skip: true
    }
	);

  console.log(error)

	return (
		<PageLayout>
			<Search setSearch={setSearch} />
			<Movies movies={[]} />
		</PageLayout>
	);
}
