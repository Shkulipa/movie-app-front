import cn from 'src/helpers/className.helper';
import { ILoader } from "./loader.interfaces";
import "./loader.styles.scss";

export function Loader({ 
	className,
	...props
 }: ILoader): JSX.Element {
  return (
    <div className={cn(["loader", className])} {...props} />
  )
}
