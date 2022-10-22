export interface IMovie {
  id: string;
  title: string;
  year: string;
  runtime: string;
  genre: string;
  director: string;
  imdbid: string;
  isFavorite?: boolean;
  error?: string;
}

export interface IIdMovie extends Pick<IMovie, 'imdbid'> {};

export interface IMoviePayload extends Pick<IMovie, 'title' | 'year' | 'imdbid'> {}
export interface IMoviesFavoritePayload {
  count: number;
  rows: IMoviePayload[];
}
export interface IValuesMovie
	extends Pick<IMovie, 'title' | 'year' | 'runtime' | 'genre' | 'director'> {}