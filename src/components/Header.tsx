import { useParams, Link } from 'react-router-dom';
import whiteLogo from '../assets/whiteLogo.png';
import dziennik29Data from '../data/dziennik29.json';
import dziennik29PrzebudzenieData from '../data/dziennik29Przebudzenie.json';

const getBrandContent = (id?: number) => {
	const dziennik29Length = dziennik29Data.length;
	const dziennik29PrzebudzenieLength = dziennik29Length + dziennik29PrzebudzenieData.length;
	if (!id || id < dziennik29Length) {
		return (
			<>
				<img src={whiteLogo} alt="Dziennik 29" />
			</>
		);
	}

	const subtitle = id >= dziennik29PrzebudzenieLength ? 'Zapomnienie' : 'Przebudzenie';
	return (
		<>
			<span className="line">
				<h2>D</h2>
				<h3>ziennik</h3>
				<h2>29</h2>
			</span>
			<h4 className="subtitle">{subtitle}</h4>
		</>
	);
};

const Header = () => {
	const { pageId } = useParams();
	const id = Number(pageId);

	return (
		<header className="header">
			<div className="nav">
				<Link className="brand" to="/" aria-label="Strona główna">
					{getBrandContent(isNaN(id) ? undefined : id)}
				</Link>
			</div>
		</header>
	);
};

export default Header;
