import { IStarFavoriteProps } from './starFavorite.interface';
import useFavoriteHandler from './useFavoriteHandler';

export function StarFavorite({
	isFavorite,
	...props
}: IStarFavoriteProps): JSX.Element {
	const { onMouseOverFavorite, onMouseOutFavorite, isFavoriteHandler } =
		useFavoriteHandler({ isFavorite });

	return (
		<div
			className="starWrapper"
			onMouseOver={onMouseOverFavorite}
			onMouseOut={onMouseOutFavorite}
			{...props}
		>
			{isFavoriteHandler()}
		</div>
	);
}
