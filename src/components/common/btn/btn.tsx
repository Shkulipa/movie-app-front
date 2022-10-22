import cn from 'src/helpers/className.helper';
import { IBtn } from './btn.interfaces';
import './btn.styles.scss';

export function Btn({
	children,
	className,
	disabled,
	...props
}: IBtn): JSX.Element {
  const isDisabled = disabled ? 'disabled' : '';
  const text = disabled ? 'Not allowed' : children;

	return (
    <button
      className={cn(['btn', isDisabled, className])}
      {...props}
    >
      {text}
    </button>
  )
}
