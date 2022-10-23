import { movieValidation } from 'src/validations/movie.validation';
import { useFormik } from 'formik';
import { toastr } from 'react-redux-toastr';
import './modalEdit.styles.scss';
import { Btn, Input } from 'src/components';
import useErrorMovie from 'src/hooks/useErrorMovie/useErrorMovie';
import { IMovie, IValuesMovie } from 'src/interfaces/movie.interfaces';
import { moviesAPI } from 'src/services/movieAPI.service';
import { forwardRef, useEffect } from 'react';
import { IModalEditProps } from './modalEdit.interfaces';

const ModalEdit = forwardRef(({
	setIsOpen,
	initialValues,
	imdbid,
  setMovieData,
}: IModalEditProps, ref: any): JSX.Element => {
	const [editMovie, { error, isLoading, originalArgs, isSuccess }] = moviesAPI.useEditMoviesMutation();

  useEffect(() => {
    if(isSuccess) {
      setMovieData(originalArgs as IMovie);
    }
  }, [isSuccess, originalArgs])

	const onSubmit = (values: IValuesMovie) => {
		const body = {
			...values,
			imdbid
		};
		editMovie(body)
      .unwrap().then(() => {
        setIsOpen(false);
        toastr.success('Status', 'Movie updated!');
      });
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
		<div className='modalEdit' ref={ref}>
			<div className='modalEditContainer'>
				<div className='close' onClick={() => setIsOpen(false)}>
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
							placeholder='Director...'
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
});

export default ModalEdit;
