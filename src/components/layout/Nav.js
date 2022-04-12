import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from '../styles/layoutStyles/Nav.styled';

const Nav = () => {
	return (
		<StyledNav>
			<div id="nav-container-inner">
				<h3 className="logo">brett treweek</h3>
				<ul>
					<li>
						<NavLink activeClassName='active' to='/work'>
							work
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/resume'>
							resume
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName='active' to='/contact'>
							contact
						</NavLink>
					</li>
					
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
