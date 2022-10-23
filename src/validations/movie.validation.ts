import * as Yup from 'yup';

export const movieValidation = Yup.object().shape({
	title: Yup.string()
		.max(100, 'Should be max 100 symbols')
		.required('Required'),
	year: Yup.number().min(1900, 'Should be 1900 symbols').required('Required'),
	runtime: Yup.string()
		.min(1, 'Should be minimum 1 symbols')
		.required('Required'),
	genre: Yup.string().max(50, 'Should be max 50 symbols').required('Required'),
	director: Yup.string()
		.max(50, 'Should be max 50 symbols')
		.required('Required')
});
