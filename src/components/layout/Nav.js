import { StyledNav } from '../styles/layoutStyles/Nav.styled';

const Nav = () => {
	return (
		<StyledNav>
			<div id="nav-container-inner">
				<h3 className='logo'>brett treweek</h3>
				<ul>
					<li>about</li>
					<li>work</li>
					<li>resume</li>
					<li>contact</li>
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
