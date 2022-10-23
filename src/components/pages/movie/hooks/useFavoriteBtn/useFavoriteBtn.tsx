import { moviesAPI } from 'src/services/movieAPI.service';
import { useEffect, useState } from 'react';
import { IUseFavoriteBtnProps } from './useFavoriteBtn.interfaces';
import { Loader, StarFavorite } from 'src/components';
import { toastr } from 'react-redux-toastr';

export default function useFavoriteBtn({
	imdbid,
	isFavorite
}: IUseFavoriteBtnProps) {
	const [
		favoriteMovieHandler,
		{ isLoading: isLoadingFavorite, error: errorFavorite }
	] = moviesAPI.useFavoriteMovieMutation();
	const [isFavoriteToggle, setIsFavoriteToggle] = useState<boolean>(false);

	useEffect(() => {
		setIsFavoriteToggle(isFavorite || false);
	}, [isFavorite]);

	const toogleFavorite = () => {
		const textFavoriteToogle = isFavoriteToggle ? 'deleted from' : 'added to';
    const msg = `Movie was ${textFavoriteToogle} Favorites!`;

		favoriteMovieHandler({ imdbid })
			.unwrap()
			.then(() =>
				toastr.success('Status', msg)
			)
			.catch(err => {
				console.error(err);
				toastr.error('Status', 'Smth went wrong, please try later');
			});
		setIsFavoriteToggle(s => !s);
	};

	const favoriteStart = isLoadingFavorite ? (
		<Loader />
	) : (
		<StarFavorite
			onClick={toogleFavorite}
			isFavorite={isFavoriteToggle}
			imdbid={imdbid}
		/>
	);

	return {
		errorFavorite,
		favoriteStart
	};
}
