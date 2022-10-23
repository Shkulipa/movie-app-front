import { useEffect } from 'react';
import { Router } from 'src/components';
import { useAppDispatch } from './hooks/redux';
import { CONST } from './interfaces/consts.interfaces';
import { IUser } from './interfaces/user.interfaces';
import { authSlice } from './store/slices/auth/auth.slice';

import 'src/styles/app.scss';
import 'src/styles/common.scss';

function App() {
	const dispatch = useAppDispatch();
	const { setUser } = authSlice.actions;

	useEffect(() => {
		const user = localStorage.getItem(
			CONST.LOCAL_STORAGE_USER
		) as unknown as IUser;
		if (user) dispatch(setUser(user));
	}, []);

	return <Router />;
}

export default App;
