import { useState } from 'react';
import { IValuesMovie } from 'src/interfaces/movie.interfaces';
import { moviesAPI } from 'src/services/movieAPI.service';
import { movieValidation } from 'src/validations/movie.validation';
import { FormikHelpers, useFormik } from 'formik';
import { toastr } from 'react-redux-toastr';
import { Btn, Input, PageLayout } from 'src/components';
import './createMovie.styles.scss';
import { initialValues } from './utils/initialValues.utils';
import useErrorMovie from 'src/hooks/useErrorMovie/useErrorMovie';
import { objKeysToLoweCase } from 'src/helpers/objectKeysLowecase';
import { useNavigate } from 'react-router-dom';

export default function CreateMovie(): JSX.Element {
	const [createMovie, { error, isLoading }] =
		moviesAPI.useCreateMovieMutation();
	const history = useNavigate();

	const optionsToaster = (imdbid: string) => ({
		onToastrClick: () => history(`/movie/${imdbid}`)
	});

	const onSubmit = (
		values: IValuesMovie,
		{ resetForm }: FormikHelpers<IValuesMovie>
	) => {
		createMovie(values)
			.unwrap()
			.then(res => {
				const makeSmallKeys = objKeysToLoweCase(res);
				const imdbid = makeSmallKeys.imdbid;
				toastr.success(
					'Status',
					`Movie created! id: ${imdbid}`,
					optionsToaster(imdbid)
				);
        resetForm();
			})
			.catch(err => {
				console.error(err);
				toastr.success('Status', 'Smth went wrong :(');
			});
	};

	const formCreateMovie = useFormik<IValuesMovie>({
		initialValues,
		validationSchema: movieValidation,
		onSubmit,
		validateOnMount: true
	});
	const {
		errorFetch,
		errorTitle,
		errorYear,
		errorGenre,
		errorRuntime,
		errorDirector
	} = useErrorMovie({ form: formCreateMovie, error });

	return (
		<PageLayout>
			<form className='createMovieForm' onSubmit={formCreateMovie.handleSubmit}>
				<div className='inputEditWrapper'>
					<Input
						name='title'
						placeholder='Title...'
						onChange={formCreateMovie.handleChange}
						value={formCreateMovie.values.title}
					/>
					{errorTitle}
				</div>
				<div className='inputEditWrapper'>
					<Input
						name='year'
						placeholder='Year...'
						type='number'
						onChange={formCreateMovie.handleChange}
						value={formCreateMovie.values.year}
					/>
					{errorYear}
				</div>
				<div className='inputEditWrapper'>
					<Input
						name='genre'
						placeholder='Genre...'
						onChange={formCreateMovie.handleChange}
						value={formCreateMovie.values.genre}
					/>
					{errorGenre}
				</div>
				<div className='inputEditWrapper'>
					<Input
						name='runtime'
						placeholder='Runtime...'
						onChange={formCreateMovie.handleChange}
						value={formCreateMovie.values.runtime}
					/>
					{errorRuntime}
				</div>
				<div className='inputEditWrapper'>
					<Input
						name='director'
						placeholder='Director...'
						onChange={formCreateMovie.handleChange}
						value={formCreateMovie.values.director}
					/>
					{errorDirector}
				</div>
				<Btn
					className='btnCreate'
					type='submit'
					disabled={!formCreateMovie.isValid || isLoading}
				>
					Create Movie
				</Btn>
			</form>
			{errorFetch}
		</PageLayout>
	);
}
