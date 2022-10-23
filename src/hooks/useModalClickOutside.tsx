import { useRef, useState, useEffect } from 'react';

type IUseModalClickOutsideProps ={
	excludeClickByIds?: string[];
}

export default function useModalClickOutside({
	excludeClickByIds = []
}: IUseModalClickOutsideProps) {
	const refModal = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const toggleModal = () => setIsOpen(s => !s);
	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			if (
				isOpen &&
				refModal.current &&
				!refModal.current.contains(e.target as Node) &&
				!excludeClickByIds.includes((e.target as HTMLDivElement).id)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', checkIfClickedOutside);

		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, [isOpen]);

	return { isOpen, toggleModal, refModal, setIsOpen };
}
