import { PageLayout, Movies } from 'src/components';
import Search from './components/search/search';

import { dataMovies } from 'src/utils/dataMovies';

export default function Home(): JSX.Element {
  return (
    <PageLayout>
      <Search />
      <Movies movies={dataMovies}/>
    </PageLayout>
  )
}
