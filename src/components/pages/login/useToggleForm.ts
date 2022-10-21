import { useState } from 'react'

export default function useToggleForm() {
  const [isSignInForm, setIsToggleForm] = useState<boolean>(true);
  const classToggleForm = isSignInForm ? 'classToggleForm' : '';
  const toggleForm = () => setIsToggleForm(s => !s);
  
  return { classToggleForm, toggleForm }
}
