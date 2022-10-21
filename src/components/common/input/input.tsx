import cn from "src/helpers/className.helper";
import { IInputProps } from "./input.interface";
import "./input.styles.scss";

export function Input({
	className,
	value,
	onChange,
	...props
}: IInputProps): JSX.Element {
	return (
		<input
			className={cn(['input', className])}
			value={value}
			onChange={onChange}
			{...props}
		/>
	);
}