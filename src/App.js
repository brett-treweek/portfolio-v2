import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
// import { useRef } from 'react';

function App() {

	const navClickHandler = (navclick) => {
		
		console.log("Nav clicked!!!!!", navclick);
	}
	

	return (
		<>
			<GlobalStyles />
			<Header onNavigate={navClickHandler}/>
			<div
			style={ {height: "10000px", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'} }
			>
				<p>This is This</p>
				<p>Hello World</p>
			</div>
		</>
	);
}

export default App;
