const BASE_URL = 'https://www.journal29.com/';

interface MirrorProps {
	path: string;
}

const Mirror = ({ path }: MirrorProps) => {
	return (
		<div className="iframe-full-page">
			<iframe src={`${BASE_URL}${path}/`} className="content-iframe" allowFullScreen />
		</div>
	);
};

export default Mirror;
