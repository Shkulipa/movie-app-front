import { moviesAPI } from "src/services/movieAPI.service";
import { useState } from "react";
import { IUseFavoriteBtnProps } from "./useFavoriteBtn.interfaces";
import { Loader, StarFavorite } from "src/components";

export default function useFavoriteBtn({ imdbid, isFavorite }: IUseFavoriteBtnProps) {
  const [
		favoriteMovieHandler,
		{ isLoading: isLoadingFavorite, error: errorFavorite }
	] = moviesAPI.useFavoriteMovieMutation();
	const [isFavoriteToggle, setIsFavoriteToggle] = useState<boolean>(
		isFavorite || false
	);
	const toogleFavorite = () => {
    favoriteMovieHandler({ imdbid });
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
  }
}
