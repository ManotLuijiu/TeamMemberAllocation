import React, { useState } from 'react';
import useDarkSide from '../hook/useDarkSide';

const Switcher = () => {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === 'light' ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<>
			<div className="m-16 flex flex-col items-center">
				<h3>{colorTheme === 'light' ? 'Dark mode' : 'Light mode'}</h3>
			</div>
		</>
	);
};

export default Switcher;
