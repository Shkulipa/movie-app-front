import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
	email: Yup.string().email('Invalid Email').required('Required'),
	password: Yup.string().min(6, 'Should be 6+ symbols').required('Required')
});
