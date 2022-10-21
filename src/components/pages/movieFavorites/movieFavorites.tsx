import { Movies, PageLayout } from "src/components";
import "./movieFavorites.styles.scss";

export default function MovieFavorites(): JSX.Element {
  /**
   * @Todo
   * protect page
   */

  return (
    <PageLayout>
      <div className="movieFavorites">
        {/* <Movies movies={[]}/> */}
      </div>
    </PageLayout>
  )
}
