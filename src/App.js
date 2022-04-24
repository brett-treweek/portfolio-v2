import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import About from './components/layout/pages/About';
import Header from './components/layout/pages/Header';
import Work from './components/layout/pages/Work';
import Nav from './components/layout/pages/Nav';
import Resume from './components/layout/pages/Resume';
import Contact from './components/layout/pages/Contact';

function App() {
	const [currentTheme, setCurrentTheme] = useState(0)

	const theme = {
		colors: {
			primary: {
				text: '#fff',
				faded: 'grey',
				background: '#111111',
				main: '#0018A2',
				highlight: '#F7FF00',
				watermark: 'rgba(255, 255, 255, 0.02)',
			},
			secondary: {
				text: '#000',
				faded: 'grey',
				background: 'white',
				main: 'red',
				highlight: 'green',
				watermark: 'rgba(255, 255, 255, 0.02)',
			},
		},
	};

	const changeColor = () => {
		console.log(theme.colors);
	};

	return (
		<ThemeProvider theme={theme}>
			<Nav changeColor={changeColor}/>
			<Switch>
				<Route path="/" exact>
					<Header />
					<About/>
					<Work/>
				</Route>
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/work" >
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
