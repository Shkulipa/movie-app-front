import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface IUseFormSearch {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export interface ISearchProps
	extends PropsWithChildren<
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
	>, IUseFormSearch {}



export interface ISearchValues {
  search: string;
}