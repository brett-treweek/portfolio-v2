import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: absolute;
	top: 0px;
	left: 0px;
	width: 250px;
	height: 100vh;
	background-color: #000;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 30vh;

	h2 {
		margin: 0;
		font-weight: 200;
		font-size: 1.5rem;
		letter-spacing: 0.06ch;
	}

	p {
		margin: 0;
		font-size: 1rem;
		letter-spacing: 0.1ch;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	button {
		margin: 20px;
		border: transparent;
		background-color: #000;
		color: #fff;
		font-size: 1.2rem;
	}

    button:hover {
        cursor: pointer;
    }

	.logo {
		text-align: center;
		padding: 20px;
	}
`;