import { IUser } from 'src/interfaces/user.interfaces';

export interface IAuthState {
	user: IUser | null;
	isLoading: boolean;
	error: string;
}
