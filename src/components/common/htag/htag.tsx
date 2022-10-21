import cn from 'src/helpers/className.helper';

import { IHtagProps } from './htag.interfaces';
import './htag.styles.scss';

export function Htag({
	tag,
	className,
	children,
	...props
}: IHtagProps): JSX.Element {
	switch (tag) {
		case 'h1':
			return (
				<h1 className={cn(["h", "h1", className])} {...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={cn(["h", "h2", className])} {...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={cn(["h", "h3", className])} {...props}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
}