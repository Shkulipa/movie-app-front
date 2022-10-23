import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from './redux';

/**
 * @info
 * if user auth
 * and you don't want see a page for him
 * you can redirect him to the main page
 * example:
 * 1. user is auth
 * 2. and you don't want show login page for him
 * 3. when he comes to this page
 * 4. he will redirect to home
 */
export function useCheckAuth() {
	const { user } = useAppSelector(s => s.auth);
	const history = useNavigate();

	useEffect(() => {
		if (user) history('/');
	}, [user, history]);
}
