import { ErrorMsg } from 'src/components';
import { IUseErrorMovie } from './useErrorMovie.interfaces';

export default function useErrorMovie({ form, error }: IUseErrorMovie) {
	const errorTitle = form.errors.title && form.touched.title && (
		<ErrorMsg>{form.errors.title}</ErrorMsg>
	);
	const errorYear = form.errors.year && form.touched.year && (
		<ErrorMsg>{form.errors.year}</ErrorMsg>
	);
	const errorRuntime = form.errors.runtime && form.touched.runtime && (
		<ErrorMsg>{form.errors.runtime}</ErrorMsg>
	);
	const errorGenre = form.errors.genre && form.touched.genre && (
		<ErrorMsg>{form.errors.genre}</ErrorMsg>
	);
	const errorDirector = form.errors.director && form.touched.director && (
		<ErrorMsg>{form.errors.director}</ErrorMsg>
	);
  const errorFetch = error && (
		<ErrorMsg>Smth went wrong, please try later</ErrorMsg>
	);

	return { errorFetch, errorTitle, errorYear, errorRuntime, errorGenre, errorDirector };
}
