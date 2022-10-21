import { Link } from "react-router-dom";
import { Btn } from "src/components";
import { ICardMovieProps } from "./cardMovie.interfaces";
import "./cardMovie.styles.scss";

export function CardMovie({ movie, idx }: ICardMovieProps): JSX.Element {
  const { year, title, imdbID } = movie;
  
  return (
    <div className="cardMovie">
      <p>#: {idx + 1}</p>
      <p>year: {year}</p>
      <p>title: {title}</p>
      
      <Link to={`/movie/${imdbID}`}>
        <Btn>
          Read more...
        </Btn>
      </Link>
    </div>
  )
}