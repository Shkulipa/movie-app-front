import { Btn, Input, Htag } from 'src/components';
import { IFormSignInProps } from './formSignIn.interfacses';
import { useFormSignIn } from './useFormSignIn';

export function FormSignIn({ toggleForm }: IFormSignInProps): JSX.Element {
	const { formSignIn, errorEmailSignIn, errorPassSignIn } = useFormSignIn();

	const signInForm = (
		<form className='signIn' onSubmit={formSignIn.handleSubmit}>
      <Htag className='titleLogin' tag="h2">Login</Htag>
			<div className='inputWrapper'>
				<Input
          name="email"
					className='bgSignIn'
					placeholder='Email...'
					onChange={formSignIn.handleChange}
					value={formSignIn.values.email}
				/>
				{errorEmailSignIn}
			</div>
			<div className='inputWrapper'>
				<Input
          name="password"
					className='bgSignIn'
					placeholder='Password...'
					type='password'
					onChange={formSignIn.handleChange}
					value={formSignIn.values.password}
				/>
				{errorPassSignIn}
			</div>
			<Btn className='bgSignIn btnLogin' type='submit'>
				Sign In
			</Btn>
			<div className='questionLogin' onClick={toggleForm}>
				Havn't account?
			</div>
		</form>
	);
	return signInForm;
}
