import { Btn, Input, Htag } from 'src/components';
import { IFormSignUpProps } from './formSignUp.interfacses';
import useFormSignUp from './useFormSignUp';

export function FormSignUp({ toggleForm }: IFormSignUpProps): JSX.Element {
	const { formSignUp, errorEmailSignUp, errorPassSignUp } = useFormSignUp();

	const signInForm = (
		<form className='signUp' onSubmit={formSignUp.handleSubmit}>
      <Htag className='titleLogin' tag="h2">Registration</Htag>
			<div className='inputWrapper'>
				<Input
          name="email"
					className='bgSignUp'
					placeholder='Email...'
					onChange={formSignUp.handleChange}
					value={formSignUp.values.email}
				/>
				{errorEmailSignUp}
			</div>
			<div className='inputWrapper'>
				<Input
          name="password"
					className='bgSignUp'
					placeholder='Password...'
					type='password'
					onChange={formSignUp.handleChange}
					value={formSignUp.values.password}
				/>
				{errorPassSignUp}
			</div>

			<Btn className='bgSignUp btnLogin' type='submit'>
				Sign Up
			</Btn>
			<div className='questionLogin' onClick={toggleForm}>
				Already have account?
			</div>
		</form>
	);
	return signInForm;
}
