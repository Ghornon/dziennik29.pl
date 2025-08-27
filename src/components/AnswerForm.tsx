import { useCallback, useEffect, useState } from 'react';
import { reverseAnswer } from '../Helpers/reverseAnswer';
import { useGameStore } from '../store/GameStore';

const AnswerForm = () => {
	const currentPage = useGameStore((state) => state.currentPage);
	const keys = useGameStore((state) => state.keys);
	const setValue = useGameStore((state) => state.setValue);

	const [answer, setAnswer] = useState('');

	const checkAnswer = useCallback(() => {
		const correctAnswer = reverseAnswer(keys[currentPage]?.answer);
		const key = keys[currentPage]?.key;

		if (answer.trim().toLowerCase() == correctAnswer) {
			setValue('correctAnswer', true);

			let result = `Poprawnie!`;
			if (key) result += `\n{Klucz.${currentPage}}: ${key}`;

			setValue('result', result);
		} else {
			setValue('result', 'Błędna odpowiedź');
		}
	}, [answer, currentPage, keys, setValue]);

	useEffect(() => {
		const listener = (event: { code: string; preventDefault: () => void }) => {
			if (event.code === 'Enter' || event.code === 'NumpadEnter') {
				event.preventDefault();
				checkAnswer();
			}
		};
		document.addEventListener('keydown', listener);
		return () => {
			document.removeEventListener('keydown', listener);
		};
	}, [currentPage, checkAnswer]);

	useEffect(() => {
		setAnswer('');
	}, [currentPage]);

	return (
		<div className="container">
			<h1 className="h1">Rozwiąż zagadkę {currentPage}</h1>

			<div className="form-wrap">
				<div className="input-shell">
					<div className="input-box">
						<input
							className="input"
							type="text"
							placeholder="Wpisz odpowiedź…"
							autoComplete="off"
							value={answer}
							autoFocus
							onChange={(e) => setAnswer(e.target.value)}
						/>
						<div className="sep"></div>
						<button className="go" aria-label="Sprawdź" onClick={checkAnswer}>
							›
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnswerForm;
