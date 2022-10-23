import { useAppSelector } from 'src/hooks/redux';
import { ErrorMsg } from 'src/components';

export default function useErrorLogin() {
	const { error } = useAppSelector(s => s.auth);

	const isError = error && (
		<ErrorMsg className="errorApiLogin">{error}</ErrorMsg>
	);

	return { isError };
}
