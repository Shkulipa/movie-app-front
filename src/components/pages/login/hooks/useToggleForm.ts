import { authSlice } from 'src/store/slices/auth/auth.slice';
import { useState } from 'react';
import { useAppDispatch } from 'src/hooks/redux';

export default function useToggleForm() {
  const dispatch = useAppDispatch();
  const { closeError } = authSlice.actions;
  const [isSignInForm, setIsToggleForm] = useState<boolean>(false);
  const classToggleForm = isSignInForm ? 'classToggleForm' : '';
  const toggleForm = () => {
    dispatch(closeError());
    setIsToggleForm(s => !s);
  };
  
  return { classToggleForm, toggleForm }
}
