import { movieValidation } from 'src/validations/movie.validation';
import { useFormik } from 'formik';
import { IModalEditProps } from './modalEdit.interfaces';
import './modalEdit.styles.scss';
import { Btn, Input } from 'src/components';
import useErrorMovie from 'src/hooks/useErrorMovie/useErrorMovie';
import { IMovie, IValuesMovie } from 'src/interfaces/movie.interfaces';
import { moviesAPI } from 'src/services/movieAPI.service';
import { useEffect } from 'react';

const ModalEdit = ({
	toggleModel,
	initialValues,
	imdbid,
  setMovieData
}: IModalEditProps): JSX.Element => {
	const [editMovie, { error, isLoading, isSuccess, originalArgs }] = moviesAPI.useEditMoviesMutation();

  useEffect(() => {
    if(isSuccess) {
      setMovieData(originalArgs as IMovie);
      toggleModel();
    }
  }, [isSuccess, originalArgs])

	const onSubmit = (values: IValuesMovie) => {
		const body = {
			...values,
			imdbid
		};
		editMovie(body);
	};

	const formEditMovie = useFormik<IValuesMovie>({
		initialValues: {
			...initialValues,
			runtime: initialValues.runtime.split(' ')[0]
		},
		validationSchema: movieValidation,
		onSubmit,
		validateOnMount: true
	});
	const { errorFetch, errorTitle, errorYear, errorGenre, errorRuntime, errorDirector } =
		useErrorMovie({ form: formEditMovie, error });

	return (
		<div className='modalEdit'>
			<div className='modalEditContainer'>
				<div className='close' onClick={toggleModel}>
					close
				</div>
        {errorFetch}
				<form onSubmit={formEditMovie.handleSubmit}>
					<div className='inputEditWrapper'>
						<Input
							name='title'
							placeholder='Title...'
							onChange={formEditMovie.handleChange}
							value={formEditMovie.values.title}
						/>
						{errorTitle}
					</div>
					<div className='inputEditWrapper'>
						<Input
							name='year'
							placeholder='Year...'
							type='number'
							onChange={formEditMovie.handleChange}
							value={formEditMovie.values.year}
						/>
						{errorYear}
					</div>
					<div className='inputEditWrapper'>
						<Input
							name='genre'
							placeholder='Genre...'
							onChange={formEditMovie.handleChange}
							value={formEditMovie.values.genre}
						/>
						{errorGenre}
					</div>
					<div className='inputEditWrapper'>
						<Input
							name='runtime'
							type='number'
							placeholder='Runtime...'
							onChange={formEditMovie.handleChange}
							value={formEditMovie.values.runtime}
						/>
						{errorRuntime}
					</div>
					<div className='inputEditWrapper'>
						<Input
							name='director'
							placeholder='Genre...'
							onChange={formEditMovie.handleChange}
							value={formEditMovie.values.director}
						/>
						{errorDirector}
					</div>
					<Btn
						className='btnEdit'
						type='submit'
						disabled={!formEditMovie.isValid || isLoading}
					>
						Edit
					</Btn>
				</form>
			</div>
		</div>
	);
};

export default ModalEdit;