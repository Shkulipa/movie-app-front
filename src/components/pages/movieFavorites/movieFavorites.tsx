import { Movies, PageLayout } from "src/components";
import { dataMovies } from "src/utils/dataMovies";
import "./movieFavorites.styles.scss";

export default function MovieFavorites(): JSX.Element {
  /**
   * @Todo
   * protect page
   */

  return (
    <PageLayout>
      <div className="movieFavorites">
        <Movies movies={dataMovies}/>
      </div>
    </PageLayout>
  )
}
