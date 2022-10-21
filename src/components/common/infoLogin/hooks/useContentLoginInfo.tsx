import { useAppSelector } from 'src/hooks/redux';
import { login } from 'src/utils/pages/pages';
import React from 'react';
import { Link } from 'react-router-dom';

interface IUseContentLoginInfoProps {
	toggleModal: () => void;
}

export default function useContentLoginInfo({
	toggleModal
}: IUseContentLoginInfoProps) {
	const { user, isLoading } = useAppSelector(s => s.auth);
	const infoUser = (
		<div className='info' onClick={toggleModal}>
			test@gmail.com
		</div>
	);
	const btnLogin = <Link to={login.path}>Login</Link>;
	const isAuth = user ? infoUser : btnLogin;

	return { isAuth, isLoading };
}
