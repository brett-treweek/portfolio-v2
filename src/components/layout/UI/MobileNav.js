import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import { Hamburger } from './Hamburger';

const NavLinksContainer = styled.div`
	width: 100%;
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

const LinksWrapper = styled.ul`
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
`;


const LinkItem = styled.li`
	text-decoration: none;
	padding: 10px 50px;
	margin: 0 10px;
	transition: all ease 0.3s;
	cursor: pointer;
`;

export const MobileNavLinks = (props) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<NavLinksContainer>
			<NavLink
				className="logo"
				to="/"
				activeClassName="active"
				exact
				onClick={() => setOpen(false)}
			>
				brett treweek
			</NavLink>
			<Hamburger isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
			{isOpen && (
				<LinksWrapper>
					<LinkItem>
						<NavLink
							className="link"
							onClick={() => setOpen(false)}
							activeClassName="active"
							to="/work"
							exact
						>
							projects
						</NavLink>
					</LinkItem>
					<LinkItem>
						<NavLink
							className="link"
							onClick={() => setOpen(false)}
							activeClassName="active"
							to="/about"
							exact
						>
							about
						</NavLink>
					</LinkItem>
					<LinkItem>
						<NavLink
							className="link"
							onClick={() => setOpen(false)}
							activeClassName="active"
							to="/contact"
							exact
						>
							contact
						</NavLink>
					</LinkItem>
					<LinkItem>
						<Icon
							className="link"
							onClick={props.changeColor}
							icon="eos-icons:arrow-rotate"
							height="25"
						/>
					</LinkItem>
				</LinksWrapper>
			)}
		</NavLinksContainer>
	);
};
