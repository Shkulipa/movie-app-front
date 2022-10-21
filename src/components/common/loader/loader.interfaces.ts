import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface ILoader
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}
