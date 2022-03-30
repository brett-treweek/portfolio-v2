import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<div
				style={{
					height: '4000px',
					backgroundColor: '#000',
					position: 'static',
					top: '0',
				}}
			/>
		</>
	);
}

export default App;
