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

	.logo {
		opacity: 0;
		font-size: 20px;
		margin: 0;
		font-weight: 300;
	}

	ul {
		display: flex;
		margin: 0;
	}
	li {
		background-color: ${({ theme }) => theme.colors.primary.background};
		color: ${({theme}) => theme.colors.primary.text};
		border: red solid 1px;
		padding: 10px 50px;
		margin: 0 10px;
		list-style: none;
		transition: all ease 0.6s;
	}

	.logo:hover,
	button:hover {
		cursor: pointer;
		color: ${(props) => props.theme.colors.primary.highlight};
	}
`;
