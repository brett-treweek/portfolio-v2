import styled from 'styled-components';

export const StyledNav = styled.nav`
	height: 7vh;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.background};
	z-index: 100;
	user-select: none;
	box-shadow: ${(props) => props.theme.boxShadow};

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
		transition: all ease 0.5s;
	}

	.link {
		text-decoration: none;
		color: ${({ theme }) => theme.text};
		transition: all ease 0.2s;
	}

	.link:hover,
	.theme-change:hover,
	.logo:hover {
		cursor: pointer;
	}

	.link:hover,
	.theme-change:hover,
	li:hover,
	.logo:hover {
		color: ${(props) => props.theme.main};
	}

	.active {
		color: ${({ theme }) => theme.main};
	}

	.logo {
		color: ${({ theme }) => theme.text};
		transition: all ease 0.5s;
	}

	.theme-change {
		font-size: 1rem;
		border: none;
		color: ${({ theme }) => theme.text};
		background-color: transparent;
		transition: all linear 0.5s;
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;
