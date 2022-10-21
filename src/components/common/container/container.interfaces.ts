import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface IContainer
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}
