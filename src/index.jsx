import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<Background>
				<App />
			</Background>
		</ThemeProvider>
	</React.StrictMode>
);

//"prettier-watch": "onchange --await-write-finish 5000 \"**/*\" -- prettier --write --ignore-unknown {{changed}}",
