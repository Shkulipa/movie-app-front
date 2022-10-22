import { PageLayout, Movies, Loader, ErrorMsg} from "src/components";
import { moviesAPI } from 'src/services/movieAPI.service';
import "./movieFavorites.styles.scss";

export default function MovieFavorites(): JSX.Element {
  const { isLoading, error, data } = moviesAPI.useFetchFavoriteMoviesQuery({});

  const content = isLoading 
    ? <Loader />
    : <Movies movies={data?.rows || []} />;

  return (
    <PageLayout>
      <div className="movieFavorites">
        {error && <ErrorMsg className='text-center'>Sorry, smth went wrong</ErrorMsg>}
        {content}
      </div>
    </PageLayout>
  )
}
