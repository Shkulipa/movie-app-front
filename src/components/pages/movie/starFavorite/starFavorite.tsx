import { IStarFavoriteProps } from './starFavorite.interface';
import useFavoriteHandler from './useFavoriteHandler';

export default function StarFavorite({
	isFavorite
}: IStarFavoriteProps): JSX.Element {
	const {
		toggleFavorite,
		onMouseOverFavorite,
		onMouseOutFavorite,
		isFavoriteHandler
	} = useFavoriteHandler({ isFavorite });

	return (
		<div
			className='starWrapper'
			onClick={toggleFavorite}
			onMouseOver={onMouseOverFavorite}
			onMouseOut={onMouseOutFavorite}
		>
			{isFavoriteHandler()}
		</div>
	);
}
