import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Rozpadlina from './pages/Rozpadlina';
import Notes from './pages/Notes';

function App() {
	// Implementation for gh-pages
	// <HashRouter basename={import.meta.env.DEV ? '/' : '/dziennik29.pl/'}>
	return (
		<HashRouter basename={import.meta.env.DEV ? '/' : '/dziennik29.pl/'}>
			<Routes>
				<Route path="/">
					<Route index element={<GamePage />} />
					<Route path="/rozpadlina" element={<Rozpadlina />} />
					<Route path="/notes" element={<Notes />} />
					<Route path="/notatki" element={<Notes />} />
					<Route path="/:pageId" element={<GamePage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
