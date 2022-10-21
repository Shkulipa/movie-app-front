import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface ISearchProps
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	> {}

export interface ISearchValues {
  search: string;
}