import { createContext } from 'react';

const GameContext = createContext({
	currentPage: 0,
	setCurrentPage: (page: number) => {},
	keys: [{ answer: '', key: '', tip: '', error: '' }],
	totalPages: 64,
	result: '',
	setResult: (response: string) => {},
});

export default GameContext;
