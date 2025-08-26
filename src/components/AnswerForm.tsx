import { useCallback, useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';
import { reverseAnswer } from '../Helpers/reverse';

const AnswerForm = () => {
	const {
		currentPage,
		setResult,
		keys,
	}: {
		currentPage: number;
		setResult: (result: string) => void;
		keys: { answer: string; key: string }[];
	} = useContext(GameContext);

	const [answer, setAnswer] = useState('');

	const checkAnswer = useCallback(() => {
		const correctAnswer = reverseAnswer(keys[currentPage]?.answer);
		const key = keys[currentPage]?.key;

		if (answer.trim().toLowerCase() == correctAnswer) {
			setResult(`Poprawnie! Klucz: ${key}`);
		} else {
			setResult('Błędna odpowiedź');
		}
	}, [answer, currentPage, keys, setResult]);

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
			<h1 className="h1">Odpowiedź do zagadki {currentPage}</h1>

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
