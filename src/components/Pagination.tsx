import { Link } from 'react-router-dom';

const Pagination = ({
	total,
	currentPage,
	setCurrentPage,
}: {
	total: number;
	currentPage: number;
	setCurrentPage: (page: number) => void;
}) => {
	const maxPages = 7;
	let start = Math.max(0, currentPage - Math.floor(maxPages / 2));
	let end = start + maxPages;

	if (end > total) {
		end = total;
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
					setCurrentPage(i);
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
					if (currentPage > 0) setCurrentPage(currentPage - 1);
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
					if (currentPage < total - 1) setCurrentPage(currentPage + 1);
				}}
			>
				»
			</Link>
		</div>
	);
};

export default Pagination;
