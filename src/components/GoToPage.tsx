import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useGameStore } from '../store/GameStore';

const GoToPage = () => {
	const currentPage = useGameStore((state) => state.currentPage);
	const totalPages = useGameStore((state) => state.totalPages);
	const setValue = useGameStore((state) => state.setValue);
	const [goToPage, setGoToPage] = useState<number | string>();
	const navigate = useNavigate();

	useEffect(() => {
		setGoToPage(currentPage);
	}, [currentPage]);

	return (
		<div className="goTo">
			<label htmlFor="goTo-input" className="goToPageLabel">
				Strona:
			</label>
			<input
				type="number"
				min="0"
				max={totalPages - 1}
				className="goTo-input"
				id="goTo-input"
				value={goToPage !== undefined ? goToPage : ''}
				onChange={(e) => {
					const value = e.target.value;
					setGoToPage(value);
				}}
			/>
			<button
				className="goTo-button"
				onClick={() => {
					let val = Number(goToPage);
					if (!isNaN(val)) {
						val = Math.max(0, Math.min(val, totalPages - 1));
						setValue('currentPage', val);
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
