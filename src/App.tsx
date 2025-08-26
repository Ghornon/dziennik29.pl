import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import GamePage from './pages/GamePage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/">
					<Route index element={<GamePage />} />
					<Route path="/:pageId" element={<GamePage />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
