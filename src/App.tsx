import { Routes, Route, HashRouter } from 'react-router-dom';
import GamePage from './pages/GamePage';
import NotFound from './pages/NotFound';
import Notes from './pages/Notes';
import Mirror from './components/Mirror';

function App() {
	return (
		<HashRouter>
			<Routes>
				{/* Game */}
				<Route index element={<GamePage />} />
				<Route path="/:pageId" element={<GamePage />} />

				{/* Static */}
				<Route path="/notes"    element={<Notes />} />
				<Route path="/notatki"  element={<Notes />} />

				{/* Mirrors */}
				<Route path="/rozpadlina"  element={<Mirror path="wormroot"   />} />
				<Route path="/niezbadane"  element={<Mirror path="checkpoint" />} />
				<Route path="/portal"      element={<Mirror path="entrance"   />} />
				<Route path="/kamienie"    element={<Mirror path="stones"     />} />
				<Route path="/klan"        element={<Mirror path="cloud"      />} />
				<Route path="/cisza"       element={<Mirror path="silence"    />} />
				<Route path="/klasyk"      element={<Mirror path="cave"       />} />
				<Route path="/machina"     element={<Mirror path="apparatus"  />} />
				<Route path="/zapalone"    element={<Mirror path="lightson"   />} />
				<Route path="/zgaszone"    element={<Mirror path="lightsoff"  />} />
				<Route path="/dial"        element={<Mirror path="dial"       />} />
				<Route path="/patrz"       element={<Mirror path="watch"      />} />
				<Route path="/granit"      element={<Mirror path="undergo"    />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
