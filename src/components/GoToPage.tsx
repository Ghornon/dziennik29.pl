import { useContext, useState } from 'react';
import GameContext from '../context/GameContext';
import { useNavigate } from 'react-router';

const GoToPage = () => {
	const { totalPages, setCurrentPage } = useContext(GameContext);
	const [goToPage, setGoToPage] = useState();
	const navigate = useNavigate();

	return (
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
			<button
				className="goToPageButton"
				onClick={() => {
					let val = parseInt(goToPage, 10);
					if (!isNaN(val)) {
						val = Math.max(0, Math.min(val, totalPages - 1));
						setCurrentPage(val);
						setGoToPage(val);
						navigate(`/${val}`);
					}
				}}
				aria-label="Przejdź do strony"
			>
				Przejdź
			</button>
		</div>
	);
};

export default GoToPage;
