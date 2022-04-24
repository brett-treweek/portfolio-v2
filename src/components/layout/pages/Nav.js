import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from '../../styles/layoutStyles/Nav.styled';

const Nav = (props) => {
	

	return (
		<StyledNav>
			<div id="nav-container-inner">
				<NavLink className="link" to="/" activeClassName="logo" exact>
					brett treweek
				</NavLink>
				<ul>
					<li>
						<NavLink
							className="link"
							activeClassName="active"
							to="/about"
							exact
						>
							about
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							activeClassName="active"
							to="/work"
							exact
						>
							work
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							activeClassName="active"
							to="/resume"
							exact
						>
							resume
						</NavLink>
					</li>
					<li>
						<NavLink
							className="link"
							activeClassName="active"
							to="/contact"
							exact
						>
							contact
						</NavLink>
					</li>
					<button onClick={props.changeColor}>COLOR</button>
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
