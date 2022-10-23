import cn from 'src/helpers/className.helper';

import { IErrorMsg } from './errorMsg.interfaces';
import './errorMsg.styles.scss';

export function ErrorMsg({
	children,
	className,
	...props
}: IErrorMsg): JSX.Element {
	return (
		<div className={cn(['errorMsg', className])} {...props}>
			{children}
		</div>
	);
}
