import { objKeysToLoweCase } from 'src/helpers/objectKeysLowecase';
import { Ptag } from 'src/components';
import { IInfoMovieProps } from './infoMovie.interfaces';

export default function InfoMovie({ movie }: IInfoMovieProps): JSX.Element {
	if (!movie) return <></>;
	const m = objKeysToLoweCase(movie);

	return (
		<>
			<Ptag size="s">Title: {m?.title || 'N/A'}</Ptag>
			<Ptag size="s">Year: {m?.year || 'N/A'}</Ptag>
			<Ptag size="s">Genre: {m?.genre || 'N/A'}</Ptag>
			<Ptag size="s">Director: {m?.director || 'N/A'}</Ptag>
		</>
	);
}
