import { createContext } from 'react';

const GameContext = createContext({
	currentPage: 0,
	setCurrentPage: () => {},
	keys: [{ answer: '', key: '', tip: '', error: '' }],
	totalPages: 64,
	result: '',
	setResult: () => {},
});

export default GameContext;
