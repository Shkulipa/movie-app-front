import cn from 'src/helpers/className.helper';
import { IContainer } from './container.interfaces';
import './container.styles.scss';

export function Container({
	children,
	className,
	...props
}: IContainer): JSX.Element {
	const isClassName = className ? className : '';

	return (
		<div className={cn(['container', isClassName])} {...props}>
			{children}
		</div>
	);
}
