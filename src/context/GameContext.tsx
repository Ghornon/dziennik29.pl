import { createContext } from 'react';

const GameContext = createContext({
	currentPage: 0,
	setCurrentPage: (_val: number) => {},
	keys: [{ answer: '', key: '', tip: '', error: '' }],
	totalPages: 64,
	result: '',
	setResult: (_tip: string) => {},
});

export default GameContext;
