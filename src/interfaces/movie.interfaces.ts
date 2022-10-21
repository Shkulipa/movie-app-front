export interface IMovie {
  id: string;
  title: string;
  year: string;
  runtime: string;
  genre: string;
  director: string;
  imdbid: string;
}

export interface IMoviePayload extends Pick<IMovie, 'title' | 'year' | 'imdbid'> {}