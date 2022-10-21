import { loginValidation } from "src/validations/login.validation";
import { FormikHelpers, useFormik } from 'formik';

import { ErrorMsg } from "src/components";
import { ILoginValues } from "../../login.interfaces";

const initialValues: ILoginValues = {
  email: '',
  password: ''
};

export function useFormSignIn() {
  const signInHandler = (
    { email, password }: ILoginValues,
    { setSubmitting, resetForm }: FormikHelpers<ILoginValues>
  ) => {
    console.log('signInHandler');
  }

  const formSignIn = useFormik<ILoginValues>({
		initialValues,
		validationSchema: loginValidation,
		onSubmit: signInHandler
	});

  const errorEmailSignIn = formSignIn.errors.email &&
    formSignIn.touched.email && (
			<ErrorMsg className="errorField">
				{formSignIn.errors.email}
			</ErrorMsg>
		);

  const errorPassSignIn = formSignIn.errors.password &&
    formSignIn.touched.password && (
			<ErrorMsg className="errorField">
				{formSignIn.errors.password}
			</ErrorMsg>
		);

  return { formSignIn, errorEmailSignIn, errorPassSignIn  }
}
