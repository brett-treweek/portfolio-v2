import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import About from './components/layout/pages/About';
import Header from './components/layout/pages/Header';
import Work from './components/layout/pages/Work';
import Nav from './components/layout/pages/Nav';
import Contact from './components/layout/pages/Contact';
import themeData from './assets/themeData';
import { Footer } from './components/layout/pages/Footer';

function App() {
	let lastTheme = parseInt(localStorage.getItem('localTheme'));
	const [themeIndex, setThemeIndex] = useState(lastTheme || 0);
	const length = themeData.length;

	console.log('theme-index', themeIndex);

	useEffect(() => {
		localStorage.setItem('localTheme', themeIndex);
		console.log(themeIndex, localStorage.localTheme);
	}, [themeIndex]);

	const changeColor = () => {
		setThemeIndex(themeIndex === length - 1 ? 0 : themeIndex + 1);
	};

	return (
		<ThemeProvider theme={themeData[themeIndex]}>
			<Nav changeColor={changeColor} theme={themeData[themeIndex]} />
			<Header />
			<Work />
			<About />
			<Contact />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
