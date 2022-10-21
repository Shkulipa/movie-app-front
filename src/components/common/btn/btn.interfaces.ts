import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	PropsWithChildren
} from 'react';

export interface IBtn
	extends PropsWithChildren<
		DetailedHTMLProps<
			ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	> {}
