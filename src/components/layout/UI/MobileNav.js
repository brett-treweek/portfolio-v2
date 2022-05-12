import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const NavLinksContainer = styled.div`
	width: 100vw;
	height: auto;
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.link {
		color: #fff;
		list-style: none;
		text-decoration: none;
	}

	.logo {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: all ease 0.3s;
		cursor: pointer;
	}

	.active {
		color: ${({ theme }) => theme.highlight};
	}

	@media (min-width: 1000px) {
		display: none;
	}
`;

const LinksWrapper = motion(styled.ul`
	padding: 1rem;
	display: flex;
	align-items: end;
	width: 100%;
	list-style: none;
	background-color: ${({ theme }) => theme.watermarkDark};
	flex-direction: column;
	position: fixed;
	top: 7vh;
	left: 0;
`);

const LinkItem = styled.li`
	text-decoration: none;
	padding: 10px 50px;
	margin: 0 10px;
	transition: all ease 0.3s;
	cursor: pointer;
`;

export const MobileNavLinks = (props) => {
	const [isOpen, setOpen] = useState(false);

	const clickHandler = (props) => {
		setOpen(false);
		props.changeColor();
	}

	return (
		<NavLinksContainer>
			<Link
				className="logo"
				to="header"
				smooth={true}
				duration={500}
				offset={-70}
				onClick={() => setOpen(false)}
			>
				<Logo />
			</Link>
			<Hamburger isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			<AnimatePresence>
				{isOpen && (
					<LinksWrapper
					key='mobileNav'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0, duration: 0.6 }}
						exit={{ opacity: 0, scale: 0}}
					>
						<LinkItem>
							<Link
								className="link"
								to="projects"
								smooth={true}
								duration={500}
								offset={-70}
								onClick={() => setOpen(false)}
							>
								projects
							</Link>
						</LinkItem>
						<LinkItem>
							<Link
								className="link"
								to="about"
								smooth={true}
								duration={500}
								offset={-70}
								onClick={() => setOpen(false)}
							>
								about
							</Link>
						</LinkItem>
						<LinkItem>
							<Link
								className="link"
								to="contactForm"
								smooth={true}
								duration={500}
								offset={-80}
								onClick={() => setOpen(false)}
							>
								contact
							</Link>
						</LinkItem>
						<LinkItem>
							<Icon
								className="link"
								onClick={() => clickHandler(props)}
								icon="eos-icons:arrow-rotate"
								height="25"
							/>
						</LinkItem>
					</LinksWrapper>
				)}
			</AnimatePresence>
		</NavLinksContainer>
	);
};
