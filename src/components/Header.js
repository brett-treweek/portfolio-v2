import { StyledHeader } from './styles/Header.styled';
import { useState, useRef } from 'react';
import { Tabs, Tab } from '@mui/material';

const Header = (props) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const aboutNav = useRef();
	const portfolioNav = useRef();
	const resumeNav = useRef();
	const contactNav = useRef();

	const onNavClick = (ref) => {
		if (ref.target.innerText === 'ABOUT') {
			console.log('about clicked', ref.target.innerText);
			props.onNavigate(aboutNav)
		} else if (ref.target.innerText === 'PORTFOLIO') {
			console.log('portfolio clicked', ref.target.innerText);
			props.onNavigate(portfolioNav);
		} else if (ref.target.innerText === 'RESUME') {
			console.log('resume clicked', ref.target.innerText);
			props.onNavigate(resumeNav);
		} else if (ref.target.innerText === 'CONTACT') {
			console.log('contact clicked', ref.target.innerText);
			props.onNavigate(contactNav);
		}
	};

	return (
		<StyledHeader>
			<Tabs value={value} onChange={handleChange}>
				<Tab label="About" onClick={onNavClick} ref={aboutNav} />
				<Tab
					label="Portfolio"
					onClick={onNavClick}
					ref={portfolioNav}
				/>
				<Tab label="Resume" onClick={onNavClick} ref={resumeNav} />
				<Tab label="Contact" onClick={onNavClick} ref={contactNav} />
			</Tabs>
		</StyledHeader>
	);
};

export default Header;
