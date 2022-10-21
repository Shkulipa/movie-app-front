import { useParams } from 'react-router-dom';

import { PageLayout, Ptag, Btn } from 'src/components';

import StartFill from 'src/assets/icons/star-filled.svg';
import StartOutline from 'src/assets/icons/star-outline.svg';

import './movie.styles.scss';
import { useState } from 'react';

export default function Movie(): JSX.Element {
	const { imdbID } = useParams();
  const [favorite, setFavorite] = useState(true);
  const [favoriteHover, setFavoriteHover] = useState(false);

  const toggleFavorite = () => setFavorite(s => !s);

  const onMouseOverFavorite = () => setFavoriteHover(true)
  const onMouseOutFavorite = () => setFavoriteHover(false)

  const imgStarFill = <img className='star' src={StartOutline} alt='Star outline' />;
  const imgStarOutline = <img className='star' src={StartFill} alt='Star filled' />;
	const isFavorite = () => {
    if(favorite && !favoriteHover) return imgStarFill;
    if(!favorite && !favoriteHover) return imgStarOutline;
    if(!favorite && favoriteHover) return imgStarFill;
    if(favorite && favoriteHover) return imgStarOutline;
  }

	return (
		<PageLayout>
			<div className='moviePage'>
				<div className='actionPanel'>
					<div
            className='starWrapper'
						onClick={toggleFavorite}
						onMouseOver={onMouseOverFavorite}
						onMouseOut={onMouseOutFavorite}
					>
						{isFavorite()}
					</div>
					<Btn>Delete</Btn>
					<Btn>Edit</Btn>
				</div>

				<Ptag size='s'>imdbID: {imdbID}</Ptag>
				<Ptag size='s'>Title: </Ptag>
				<Ptag size='s'>Year: </Ptag>
				<Ptag size='s'>Genre: </Ptag>
				<Ptag size='s'>Director: </Ptag>
			</div>
		</PageLayout>
	);
}
