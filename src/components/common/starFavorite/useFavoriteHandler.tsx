import { useState } from 'react';

import StartFill from 'src/assets/icons/star-filled.svg';
import StartOutline from 'src/assets/icons/star-outline.svg';
import { IIsFavoriteProps } from './starFavorite.interface';

interface IUseFavoriteHandlerProps extends IIsFavoriteProps {}

export default function useFavoriteHandler({
	isFavorite
}: IUseFavoriteHandlerProps) {
	const [isFavoriteHover, setIsFavoriteHover] = useState(false);

	const onMouseOverFavorite = () => setIsFavoriteHover(s => !s);
	const onMouseOutFavorite = () => setIsFavoriteHover(s => !s);

	const imgStarFill = (
		<img className="star" src={StartFill} alt="Star filled" />
	);
	const imgStarOutline = (
		<img className="star" src={StartOutline} alt="Star outline" />
	);
	const isFavoriteHandler = () => {
		if (isFavorite && !isFavoriteHover) return imgStarFill;
		if (!isFavorite && !isFavoriteHover) return imgStarOutline;
		if (!isFavorite && isFavoriteHover) return imgStarFill;
		if (isFavorite && isFavoriteHover) return imgStarOutline;
	};

	return {
		isFavorite,
		onMouseOverFavorite,
		onMouseOutFavorite,
		isFavoriteHandler
	};
}
