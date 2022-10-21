import cn from 'src/helpers/className.helper';

import { IPtagProps } from './ptag.interfaces';
import './ptag.styles.scss';

export const Ptag = ({
	children,
	className,
	size = 's',
	...props
}: IPtagProps): JSX.Element => {
	return (
		<p
			className={cn(["p", size, className])}
			{...props}
		>
			{children}
		</p>
	);
};
