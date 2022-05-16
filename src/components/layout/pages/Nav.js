import React from 'react';
import { Link } from 'react-scroll';
import { StyledNav, DesktopNav } from '../../styles/layoutStyles/Nav.styled';
import { Icon } from '@iconify/react';
import { MobileNavLinks } from '../UI/MobileNav';
import { Logo } from '../UI/Logo';

const Nav = (props) => {
	return (
		<StyledNav>
			<DesktopNav>
				<Link
					className="link"
					to="header"
					smooth={true}
					duration={400}
					offset={-80}
				>
					<Logo />
				</Link>
				<ul>
					<li>
						<Link
							className="link"
							to="projects"
							smooth={true}
							duration={400}
							offset={-120}
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							className="link"
							to="about"
							smooth={true}
							duration={400}
							offset={50}
						>
							about me
						</Link>
					</li>
					<li>
						<Link
							className="link"
							to="contactForm"
							smooth={true}
							duration={400}
							offset={0}
						>
							contact
						</Link>
					</li>
					<li className="theme-change" onClick={props.changeColor}>
						<Icon
							// className="theme-change"
							icon="eos-icons:arrow-rotate"
							height="25"
						/>
						theme
					</li>
				</ul>
			</DesktopNav>
			<MobileNavLinks changeColor={props.changeColor} />
		</StyledNav>
	);
};

export default Nav;
