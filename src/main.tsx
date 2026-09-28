import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App.tsx';

// Strip query-string params injected before the hash by social/ad networks
// e.g. https://example.com/?fbclid=...#/3  →  https://example.com/#/3
if (window.location.search) {
	window.history.replaceState(
		null,
		'',
		window.location.pathname + window.location.hash,
	);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
