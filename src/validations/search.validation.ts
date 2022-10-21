import * as Yup from 'yup';

export const searchValidation = Yup.object().shape({
	search: Yup.string().min(3, 'Should be 3+ symbols').required('Required')
});
