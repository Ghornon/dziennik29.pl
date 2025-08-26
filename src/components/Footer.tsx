import { useContext, useState } from 'react';
import Pagination from './Pagination';
import GameContext from '../context/GameContext';
import { Link } from 'react-router-dom';

const Footer = () => {
	const { totalPages, currentPage, setCurrentPage } = useContext(GameContext);
	const [goToPage, setGoToPage] = useState('');

	return (
		<footer className="bottom-nav">
			<div className="goToPage">
				<label htmlFor="goToPageInput" className="goToPageLabel">
					Strona:
				</label>
				<input
					type="number"
					min="0"
					max={totalPages - 1}
					className="goToPageInput"
					value={goToPage !== undefined ? goToPage : ''}
					onChange={(e) => {
						const value = e.target.value;
						setGoToPage(value);
					}}
				/>
				<Link
					to={`/${goToPage}`}
					className="goToPageButton"
					onClick={() => {
						const page = Number(goToPage);
						if (!isNaN(page) && page >= 0 && page < totalPages) {
							setCurrentPage(page);
						}
					}}
					aria-label="Przejdź do strony"
				>
					Przejdź
				</Link>
			</div>
			<Pagination
				total={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<div className="pagination" id="pagination"></div>
		</footer>
	);
};

export default Footer;
