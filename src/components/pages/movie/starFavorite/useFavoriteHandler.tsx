import { useState } from 'react';

import StartFill from 'src/assets/icons/star-filled.svg';
import StartOutline from 'src/assets/icons/star-outline.svg';
import { IIsFavoriteProps } from './starFavorite.interface';

interface IUseFavoriteHandlerProps extends IIsFavoriteProps {}

export default function useFavoriteHandler({ isFavorite }: IUseFavoriteHandlerProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const [favoriteHover, setFavoriteHover] = useState(false);
  
  const toggleFavorite = () => setFavorite(s => !s);

  const onMouseOverFavorite = () => setFavoriteHover(true)
  const onMouseOutFavorite = () => setFavoriteHover(false)

  const imgStarFill = <img className='star' src={StartOutline} alt='Star outline' />;
  const imgStarOutline = <img className='star' src={StartFill} alt='Star filled' />;
	const isFavoriteHandler = () => {
    if(favorite && !favoriteHover) return imgStarFill;
    if(!favorite && !favoriteHover) return imgStarOutline;
    if(!favorite && favoriteHover) return imgStarFill;
    if(favorite && favoriteHover) return imgStarOutline;
  }

  return {
    toggleFavorite,
    onMouseOverFavorite,
    onMouseOutFavorite,
    isFavoriteHandler
  }
}
