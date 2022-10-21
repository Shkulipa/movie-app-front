import { useAppDispatch } from 'src/hooks/redux';
import { logoutAsync } from 'src/store/actions/logout';
import { useNavigate } from 'react-router-dom';

interface IUseLogoutProps {
	toggleModal: () => void;
}

export default function useLogout({ toggleModal }: IUseLogoutProps) {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutAsync());
    toggleModal();
    history('/');
  }

  return { logoutHandler };
}
