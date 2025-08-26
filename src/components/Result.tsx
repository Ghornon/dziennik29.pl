import { useContext } from 'react';
import GameContext from '../context/GameContext';

const Result = () => {
	const { result } = useContext(GameContext);

	let resultClasses = 'result';

	if (result === 'Błędna odpowiedź') {
		resultClasses = 'result incorrect';
	} else if (result.startsWith('Poprawnie!')) {
		resultClasses = 'result correct';
	}

	return (
		<div className="container">
			<div className={resultClasses}>{result}</div>
		</div>
	);
};

export default Result;
