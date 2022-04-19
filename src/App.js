import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import About from './components/layout/About';
import Header from './components/layout/Header';
import Work from './components/layout/Work';
import Nav from './components/layout/Nav';
import Resume from './components/layout/Resume';
import Contact from './components/layout/Contact';

function App() {
	const theme = {
		colors: {
			primary: {
				text: '#fff',
				faded: 'rgba(255, 255, 255, 0.39)',
				background: '#1C1C1C',
				main: '#016098',
				highlight: '#CE7F30 ',
				watermark: 'rgba(255, 255, 255, 0.02)',
			},
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<Nav />
			<Switch>
				<Route path="/" exact>
					<Header />
					<About/>
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
