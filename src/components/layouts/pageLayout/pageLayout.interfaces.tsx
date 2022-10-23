import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface IPageLayout
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}
