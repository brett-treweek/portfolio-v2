import styled from 'styled-components';

export const StyledNav = styled.nav`
	width: 100vw;
	height: 5vh;
	position: sticky;
    top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.primary.background};
	color: ${(props) => props.theme.colors.primary.text};

	h3 {
		margin: 0;
		margin-left: 2vw;
		font-weight: 400;
	}

	ul {
		display: flex;
		margin: 0;
		margin-right: 10vw;
	}
	li {
		padding: 0 40px;
		list-style: none;
		transition: all ease 0.5s;
	}

	h3:hover,
	li:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.primary.highlight};
	}
`;
