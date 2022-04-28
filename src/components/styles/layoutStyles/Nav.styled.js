import styled from 'styled-components';

export const StyledNav = styled.nav`
	height: 7vh;
	/* width: 100vw; */
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.background};
	z-index: 100;

	#nav-container-inner {
		height: 100%;
		width: 90vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		display: flex;
		margin: 0;
	}
	li {
		padding: 10px 50px;
		margin: 0 10px;
		list-style: none;
	}

	.link {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: all ease 0.6s;
	}

	.link:hover,
	.theme-change:hover {
		cursor: pointer;
		color: ${(props) => props.theme.highlight};
	}

	.active {
		color: ${({ theme }) => theme.highlight};
	}

	.logo {
		color: ${({ theme }) => theme.text};
	}

	.theme-change {
		font-size: 1rem;
		border: none;
		color: ${({ theme }) => theme.text};
		background-color: transparent;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;
