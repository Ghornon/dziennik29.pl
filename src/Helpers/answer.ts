import type { Answer } from '../store/GameStore';

type Range = { range: string };

const reverseAnswer = (str: string) => str.split('').reverse().join('');

const isNumberRange = (answer: Answer): answer is Range =>
	typeof answer === 'object' && 'range' in answer;

const parseRange = (range: string): [number, number] => {
	const [from, to] = reverseAnswer(range).split('..').map(Number);
	return [from, to];
};

const isAnswerCorrect = (answer: Answer | undefined, guess: string): boolean => {
	if (answer == null) return false;

	const normalized = guess.trim().toLowerCase();

	if (isNumberRange(answer)) {
		const [from, to] = parseRange(answer.range);
		const num = Number(normalized);
		return Number.isInteger(num) && num >= from && num <= to;
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

	if (isNumberRange(answer)) {
		const [from, to] = parseRange(answer.range);
		return `dowolna liczba z zakresu ${from}–${to}`;
	}

	if (Array.isArray(answer)) {
		return reverseAnswer(answer[0]);
	}

	return reverseAnswer(answer);
};

export { isAnswerCorrect, formatAnswer };
