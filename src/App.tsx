import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import GamePage from './pages/GamePage';
import Rozpadlina from './pages/Rozpadlina';
import Notes from './pages/Notes';

function App() {
	return (
		<BrowserRouter>
			<Header />
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
		</BrowserRouter>
	);
}

export default App;
