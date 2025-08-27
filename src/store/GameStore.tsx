import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export interface IKey {
	answer: string;
	key: string;
	tip: string;
	error?: string;
}

interface IGameData {
	currentPage: number;
	keys: Array<IKey>;
	totalPages: number;
	result: string;
	correctAnswer: boolean;
}

const initialState: IGameData = {
	currentPage: 0,
	keys: [],
	totalPages: 0,
	result: '',
	correctAnswer: false,
};

interface IGameStore extends IGameData {
	setKeys: (keys: Array<IKey>) => void;
	setValue: <K extends keyof IGameStore>(key: K, value: IGameStore[K]) => void;
	reset: () => void;
}

export const useGameStore = create<IGameStore>()(
	devtools(
		immer((set) => ({
			...initialState,
			setKeys: (keys) => {
				set((draft) => {
					draft.keys = keys;
					draft.totalPages = keys.length;
				});
			},
			setValue: (key, value) => {
				set((draft) => {
					(draft[key] as typeof value) = value;
				});
			},
			reset: () => {
				set({ ...initialState });
			},
		}))
	)
);
