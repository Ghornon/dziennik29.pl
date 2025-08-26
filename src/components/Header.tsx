import whiteLogo from '../assets/whiteLogo.png';

const Header = () => {
	return (
		<header className="header">
			<div className="nav">
				<a className="brand" href="/">
					<img src={whiteLogo} alt="Dziennik 29" />
				</a>
			</div>
		</header>
	);
};

export default Header;
