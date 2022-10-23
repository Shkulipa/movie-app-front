import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IFormSignUpProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
	toggleForm: () => void;
}
