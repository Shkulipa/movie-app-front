import cn from 'src/helpers/className.helper';
import { Container, Loader } from 'src/components';
import './login.styles.scss';
import useToggleForm from './hooks/useToggleForm';
import { FormSignIn } from './components/formSignIn/formSignIn';
import { FormSignUp } from './components/formSignUp/formSignUp';
import { useAppSelector } from 'src/hooks/redux';
import { useCheckAuth } from 'src/hooks/useCheckAuth';

export default function Login(): JSX.Element {
	useCheckAuth();
	const { isLoading } = useAppSelector(s => s.auth);
	const { classToggleForm, toggleForm } = useToggleForm();

	const forms = (
		<div className={cn(['formWrapper', classToggleForm])}>
			<FormSignIn toggleForm={toggleForm} />
			<FormSignUp toggleForm={toggleForm} />
		</div>
	);
  const content = isLoading ? <Loader /> : forms;

	return (
		<Container>
			<div className='login'>
        {content}
      </div>
		</Container>
	);
}
