import { ThemeProvider } from "styled-components";
import Header from "./components/layout/Header";

function App() {

	const theme = {
		colors: {
			primary: {
				text: '#fff',
				faded: '#BDBDBD',
				background: '#1C1C1C',
				main: '#1D2ECA',
				highlight: '#FAFF00',
				watermark: 'rgba(255, 255, 255, 0.02)',
			}
		},
		Position: {
			
		}
	};

	console.log(theme.colors.primary.background);
	

	return (
		<ThemeProvider theme={theme}>
		<Header/>	
		</ThemeProvider>
	);
}

export default App;
