import { ThemeProvider } from 'styled-components';
import About from './components/layout/About';
import Header from './components/layout/Header';
import Work from './components/layout/Work';
import Nav from './components/layout/Nav';
import Resume from './components/layout/Resume';


function App() {
	const theme = {
		colors: {
			primary: {
				text: '#fff',
				faded: 'rgba(255, 255, 255, 0.39)',
				background: '#1C1C1C',
				main: 'blue',
				highlight: '#FAFF00',
				watermark: 'rgba(255, 255, 255, 0.02)',
			},
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Nav/>
			<Header/>
			<About/>
			<Work/>
			<Resume/>
		</ThemeProvider>
	);
}

export default App;
