import { loginValidation } from 'src/validations/login.validation';
import { FormikHelpers, useFormik } from 'formik';
import { useAppDispatch } from 'src/hooks/redux';

import { ErrorMsg } from 'src/components';
import { ILoginValues } from 'src/components/pages/login/login.interfaces';
import { signInAsync } from 'src/store/actions/signin';

const initialValues: ILoginValues = {
	email: '',
	password: ''
};

export function useFormSignIn() {
	const dispatch = useAppDispatch();

	const signInHandler = (
		{ email, password }: ILoginValues,
		{ setSubmitting, resetForm }: FormikHelpers<ILoginValues>
	) => {
		dispatch(signInAsync({ email, password }));
		setSubmitting(false);
		resetForm();
	};

	const formSignIn = useFormik<ILoginValues>({
		initialValues,
		validationSchema: loginValidation,
		onSubmit: signInHandler
	});

	const errorEmailSignIn = formSignIn.errors.email &&
		formSignIn.touched.email && (
			<ErrorMsg className="errorField">{formSignIn.errors.email}</ErrorMsg>
		);

	const errorPassSignIn = formSignIn.errors.password &&
		formSignIn.touched.password && (
			<ErrorMsg className="errorField">{formSignIn.errors.password}</ErrorMsg>
		);

	return { formSignIn, errorEmailSignIn, errorPassSignIn };
}
