import Game from '../components/Game';
import Footer from '../components/Footer';
import { useCallback, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';
import { dziennik29Data } from '../data/dziennik29Data.ts';
import { useLocation } from 'react-router-dom';

const GamePage = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const [result, setResult] = useState('');
	const keys = dziennik29Data;
	const totalPages = keys.length;

	const handlePageChange = (newPage: number) => {
		setCurrentPage(newPage);
		setResult('');
	};

	const location = useLocation();

	const loadPage = useCallback(() => {
		const pageNumber = Number(location.pathname.replace('/', ''));
		if (!isNaN(pageNumber) && pageNumber >= 0 && pageNumber < totalPages) {
			setCurrentPage(pageNumber);
		} else {
			setCurrentPage(0);
		}
	}, [location.pathname, totalPages]);

	useEffect(() => {
		loadPage();
	}, [loadPage]);

	return (
		<GameContext.Provider
			value={{
				currentPage,
				setCurrentPage: handlePageChange,
				keys,
				totalPages,
				result,
				setResult,
			}}
		>
			<Game />
			<Footer />
		</GameContext.Provider>
	);
};

export default GamePage;
