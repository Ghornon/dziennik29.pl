import Pagination from './Pagination';
import GoToPage from './GoToPage';

const Footer = () => {
	return (
		<footer className="bottom-nav">
			<GoToPage />
			<Pagination />
		</footer>
	);
};

export default Footer;
