import { useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';

const Result = () => {
	const { result } = useContext(GameContext);

	const [resultClasses, setResultClasses] = useState('result');

	useEffect(() => {
		if (result === 'Błędna odpowiedź') {
			setResultClasses('result incorrect');
		} else if (result.startsWith('Poprawnie!')) {
			setResultClasses('result correct');
		} else {
			setResultClasses('result');
		}
	}, [result]);

	return (
		<div className="container center">
			<div className={resultClasses}>{result}</div>
		</div>
	);
};

export default Result;
