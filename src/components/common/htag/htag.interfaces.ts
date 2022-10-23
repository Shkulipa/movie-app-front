import { PropsWithChildren } from 'react';

type THeading = 'h1' | 'h2' | 'h3';
export interface IHtagProps extends PropsWithChildren {
	tag: THeading;
	className?: string;
}
