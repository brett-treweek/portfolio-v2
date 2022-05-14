import styled from 'styled-components';

export const StyledNav = styled.nav`
	height: 7vh;
	min-height: 70px;
	position: sticky;
	top: -1px;
	left: 0;
	display: flex;
	align-items: center;
	background-color: ${(props) => props.theme.background};
	z-index: 1000;
	user-select: none;
	box-shadow: ${(props) => props.theme.boxShadow};

	.logo {
		color: ${({ theme }) => theme.text};
		transition: all ease 0.3s;
		cursor: pointer;
	}

	.theme-change {
		font-size: 1rem;
		border: none;
		color: ${({ theme }) => theme.text};
		background-color: transparent;
		transition: all linear 0.3s;
		cursor: pointer;
	}

	@media (min-width: 1000px) {
		justify-content: center;
	}
`;

export const DesktopNav = styled.div`
	height: 100%;
	width: 90vw;
	display: none;
	justify-content: space-between;
	align-items: center;

	ul {
		display: flex;
		margin: 0;
	}
	li {
		display: flex;
		align-items: center;
		padding: 0px 50px;
		margin: 0 10px;
		list-style: none;
		transition: all ease 0.3s;
	}

	.link {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: all ease 0.3s;
		cursor: pointer;
	}

	.link:hover,
	.theme-change:hover,
	li:hover,
	.logo:hover {
		color: ${(props) => props.theme.highlight};
	}

	@media (min-width: 1000px) {
		display: flex;
	}
`;
