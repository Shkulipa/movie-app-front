import { Input } from 'src/components';
import { ISearchProps } from './search.interfaces';
import useFormSearch from './useFormSearch';
import './search.styles.scss';
import { ChangeEvent } from 'react';

export default function Search({
	fetchMovies,
	...props
}: ISearchProps): JSX.Element {
	const { formSearch, errorSearch } = useFormSearch({ fetchMovies });

	const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
		formSearch.handleChange(e);
		formSearch.submitForm();
	};

	return (
		<div className="searchWrapper" {...props}>
			<Input
				name="search"
				className="searchInput"
				placeholder="Find your movie..."
				onChange={onChangeSearchInput}
				value={formSearch.values.search}
			/>
			{errorSearch}
		</div>
	);
}
