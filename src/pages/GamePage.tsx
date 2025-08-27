import Game from '../components/Game';
import Footer from '../components/Footer';
import { useCallback, useEffect } from 'react';
import dziennik29Data from '../data/dziennik29Data.json';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { useGameStore, type IKey } from '../store/GameStore.tsx';

const GamePage = () => {
	const { pageId } = useParams();
	const totalPages = useGameStore((state) => state.totalPages);
	const setValue = useGameStore((state) => state.setValue);
	const setKeys = useGameStore((state) => state.setKeys);

	const loadPage = useCallback(() => {
		const id = Number(pageId);

		if (!isNaN(id) && id >= 0 && id < totalPages) {
			setValue('currentPage', id);
		} else {
			setValue('currentPage', 0);
		}
	}, [pageId, setValue, totalPages]);

	useEffect(() => {
		setKeys(dziennik29Data as Array<IKey>);
		loadPage();
	}, [pageId, loadPage, setKeys]);

	return (
		<>
			<Header />
			<Game />
			<Footer />
		</>
	);
};

export default GamePage;
