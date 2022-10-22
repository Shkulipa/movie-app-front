import { IMovie } from "src/interfaces/movie.interfaces";
import { FormikProps } from "formik";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

interface IValuesMovie
	extends Pick<IMovie, 'title' | 'year' | 'runtime' | 'genre' | 'director'> {}

export interface IUseErrorMovie {
  form: FormikProps<IValuesMovie>,
  error: FetchBaseQueryError | SerializedError | undefined;
}