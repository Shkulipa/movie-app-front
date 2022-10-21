import { loginValidation } from "src/validations/login.validation";
import { FormikHelpers, useFormik } from 'formik';

import { ErrorMsg } from "src/components";
import { ILoginValues } from "../../login.interfaces";

const initialValues: ILoginValues = {
  email: '',
  password: ''
};

export default function useFormSignUp() {
  const signUpHandler = (
    { email, password }: ILoginValues,
    { setSubmitting, resetForm }: FormikHelpers<ILoginValues>
  ) => {
    console.log('signUpHandler');
  }

  const formSignUp = useFormik<ILoginValues>({
		initialValues,
		validationSchema: loginValidation,
		onSubmit: signUpHandler
	});

  const errorEmailSignUp = formSignUp.errors.email &&
    formSignUp.touched.email && (
			<ErrorMsg className="errorField">
				{formSignUp.errors.email}
			</ErrorMsg>
		);

  const errorPassSignUp = formSignUp.errors.password &&
    formSignUp.touched.password && (
			<ErrorMsg className="errorField">
				{formSignUp.errors.password}
			</ErrorMsg>
		);

  return { formSignUp, errorEmailSignUp, errorPassSignUp  }
}
