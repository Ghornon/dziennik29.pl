import Game from '../components/Game';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { useGameStore, type IKey } from '../store/GameStore.tsx';
import NotFound from './NotFound';
import dziennik29Data from '../data/dziennik29.json';
import dziennik29PrzebudzenieData from '../data/dziennik29Przebudzenie.json';
import dziennik29ZapomnienieData from '../data/dziennik29Zapomnienie.json';

const pages = [
	...dziennik29Data,
	...dziennik29PrzebudzenieData,
	...dziennik29ZapomnienieData,
] as Array<IKey>;

useGameStore.getState().setKeys(pages);

const GamePage = () => {
	const { pageId } = useParams();
	const totalPages = useGameStore((state) => state.totalPages);
	const setValue = useGameStore((state) => state.setValue);
	const pageNum = Number(pageId ?? 0);

	useEffect(() => {
		setValue('currentPage', pageNum);
	}, [pageNum, setValue]);

	if (pageId !== undefined && (!/^\d+$/.test(pageId) || pageNum >= totalPages)) return <NotFound />;

	return (
		<>
			<Header />
			<Game />
			<Footer />
		</>
	);
};

export default GamePage;
