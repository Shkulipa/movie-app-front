import { InfoLogin, Container } from 'src/components';
import './header.styles.scss';

export function Header(): JSX.Element {
	return (
		<div className="header">
			<Container>
				<InfoLogin />
			</Container>
		</div>
	);
}
