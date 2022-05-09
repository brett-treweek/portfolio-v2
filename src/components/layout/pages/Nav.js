import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav } from '../../styles/layoutStyles/Nav.styled';
import { Icon } from '@iconify/react';

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
							to="/work"
							exact
						>
							projects
						</NavLink>
					</li>
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
							to="/contact"
							exact
						>
							contact
						</NavLink>
					</li>
					<li>
						<Icon
							className="theme-change"
							onClick={props.changeColor}
							icon="eos-icons:arrow-rotate"
							height="25"
						/>
					</li>
				</ul>
			</div>
		</StyledNav>
	);
};

export default Nav;
