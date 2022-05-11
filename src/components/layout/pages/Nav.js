import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNav, DesktopNav } from '../../styles/layoutStyles/Nav.styled';
import { Icon } from '@iconify/react';
import { MobileNavLinks } from '../UI/MobileNav';
import { Logo } from '../UI/Logo';

const Nav = (props) => {
	return (
		<StyledNav>
			<DesktopNav>
				<Logo/>
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
			</DesktopNav>
			<MobileNavLinks
				changeColor={props.changeColor}
			/>
		</StyledNav>
	);
};

export default Nav;
