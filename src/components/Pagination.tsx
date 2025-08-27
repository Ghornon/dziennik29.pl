import { Link } from 'react-router-dom';
import { useGameStore } from '../store/GameStore';

const Pagination = () => {
	const currentPage = useGameStore((state) => state.currentPage);
	const totalPages = useGameStore((state) => state.totalPages);
	const setValue = useGameStore((state) => state.setValue);

	const maxPages = 7;
	let start = Math.max(0, currentPage - Math.floor(maxPages / 2));
	let end = start + maxPages;

	if (end > totalPages) {
		end = totalPages;
		start = Math.max(0, end - maxPages);
	}

	const pageLinks = [];
	for (let i = start; i < end; i++) {
		pageLinks.push(
			<Link
				key={i}
				to={`/${i}`}
				tabIndex={0}
				aria-label={`Strona ${i}`}
				className={i === currentPage ? 'active' : ''}
				aria-current={i === currentPage ? 'page' : undefined}
				onClick={() => {
					setValue('currentPage', i);
				}}
			>
				{i}
			</Link>
		);
	}

	return (
		<div className="pagination">
			<Link
				to={`/${currentPage - 1}`}
				className="pagination-prev"
				aria-label="Poprzednia strona"
				onClick={() => {
					if (currentPage > 0) setValue('currentPage', currentPage - 1);
				}}
			>
				«
			</Link>
			{pageLinks}
			<Link
				to={`/${currentPage + 1}`}
				className="pagination-next"
				aria-label="Nastepna strona"
				onClick={() => {
					if (currentPage < totalPages - 1) setValue('currentPage', currentPage + 1);
				}}
			>
				»
			</Link>
		</div>
	);
};

export default Pagination;
