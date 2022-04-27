import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import About from './components/layout/pages/About';
import Header from './components/layout/pages/Header';
import Work from './components/layout/pages/Work';
import Nav from './components/layout/pages/Nav';
import Resume from './components/layout/pages/Resume';
import Contact from './components/layout/pages/Contact';
import themeData from './assets/themeData';


function App() {
	const [themeIndex, setThemeIndex] = useState(0);
	const length = themeData.length;


	const changeColor = () => {
		setThemeIndex(themeIndex === length - 1 ? 0 : themeIndex + 1);
		console.log(themeIndex);
	};

	return (
		<ThemeProvider theme={themeData[themeIndex]}>
			<Nav changeColor={changeColor}/>
			<Switch>
				<Route path="/" exact>
					<Header />
					<About/>
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/work">
					<Work />
				</Route>
				<Route path="/resume">
					<Resume />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
