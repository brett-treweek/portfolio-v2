import styled from 'styled-components';

export const StyledNav = styled.nav`
	height: 7vh;
	width: 100%;
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary.background};
	color: ${(props) => props.theme.colors.primary.text};
	z-index: 100;

	#nav-container-inner {
		height: 100%;
		width: 90vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		margin: 0;
		font-weight: 400;
	}

	ul {
		display: flex;
		margin: 0;
	}
	li {
		padding: 0 50px;
		list-style: none;
		transition: all ease 0.5s;
	}

	h3:hover,
	li:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.primary.highlight};
	}
`;
