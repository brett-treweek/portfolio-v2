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
					duration={500}
					offset={-90}
				>
					<Logo />
				</Link>
				<ul>
					<li>
						<Link
							className="link"
							to="projects"
							smooth={true}
							duration={500}
							offset={-200}
						>
							projects
						</Link>
					</li>
					<li>
						<Link
							className="link"
							to="about"
							smooth={true}
							duration={500}
							offset={0}
						>
							about
						</Link>
					</li>
					<li>
						<Link
							className="link"
							to="contactForm"
							smooth={true}
							duration={500}
							offset={0}
						>
							contact
						</Link>
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
			<MobileNavLinks changeColor={props.changeColor} />
		</StyledNav>
	);
};

export default Nav;
