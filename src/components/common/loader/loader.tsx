import { ILoader } from "./loader.interfaces";

export function Loader({ 
	className,
	...props
 }: ILoader): JSX.Element {
  return (
    <div className={`loader ${className}`} {...props}/>
  )
}
