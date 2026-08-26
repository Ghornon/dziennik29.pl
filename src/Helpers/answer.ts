import type { Answer } from '../store/GameStore';

type Range = { from: number; to: number };

const reverseAnswer = (str: string) => str.split('').reverse().join('');

const isRange = (answer: Answer): answer is Range =>
	typeof answer === 'object' && 'from' in answer;

const isAnswerCorrect = (answer: Answer | undefined, guess: string): boolean => {
	if (answer == null) return false;

	const normalized = guess.trim().toLowerCase();

	if (isRange(answer)) {
		const num = Number(normalized);
		return Number.isFinite(num) && num >= answer.from && num <= answer.to;
	}

	if (Array.isArray(answer)) {
		return answer.some(
			(variant) => reverseAnswer(variant).toLowerCase() === normalized
		);
	}

	return reverseAnswer(answer).toLowerCase() === normalized;
};

const formatAnswer = (answer: Answer | undefined): string => {
	if (answer == null) return '';

	if (isRange(answer)) {
		return `dowolna liczba z zakresu ${answer.from}–${answer.to}`;
	}

	if (Array.isArray(answer)) {
		return reverseAnswer(answer[0]);
	}

	return reverseAnswer(answer);
};

export { isAnswerCorrect, formatAnswer };
