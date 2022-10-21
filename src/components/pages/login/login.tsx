import cn from 'src/helpers/className.helper';
import { Container } from "src/components";
import "./login.styles.scss";
import useToggleForm from './useToggleForm';
import { FormSignIn } from './components/formSignIn/formSignIn';
import { FormSignUp } from './components/formSignUp/formSignUp';

export default function Login(): JSX.Element {
  const { classToggleForm, toggleForm } = useToggleForm();

  return (
    <Container>
      <div className="login">
        <div className={cn(['formWrapper', classToggleForm])}>
          <FormSignIn toggleForm={toggleForm} />
          <FormSignUp toggleForm={toggleForm} />
        </div>
      </div>
    </Container>
  )
}
