import { Header, Container } from 'src/components';
import { IPageLayout } from './pageLayout.interfaces';

export function PageLayout({ children }: IPageLayout): JSX.Element {
	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	);
}
