import { useEffect } from 'react';
import { useGameStore } from '../store/GameStore';

const Result = () => {
	const result = useGameStore((state) => state.result);
	const currentPage = useGameStore((state) => state.currentPage);
	const setValue = useGameStore((state) => state.setValue);

	let resultClasses = 'result';

	if (result === 'Błędna odpowiedź') {
		resultClasses = 'result incorrect';
	} else if (result.startsWith('Poprawnie!')) {
		resultClasses = 'result correct';
	}

	useEffect(() => {
		setValue('result', '');
	}, [currentPage, setValue]);

	return (
		<div className="container">
			<div className={resultClasses}>{result}</div>
		</div>
	);
};

export default Result;
