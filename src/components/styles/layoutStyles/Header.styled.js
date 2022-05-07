import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${(props) => props.theme.background};

	.brett {
		text-align: start;
		margin: 0;
		font-size: clamp(1.5rem, 5vw + 1rem, 7.8rem);
		font-weight: 500;
		color: ${(props) => props.theme.highlight};
	}

	img {
		width: clamp(50vw, 70vw, 90vw);
		max-width: 500px;
		overflow: hidden;
		z-index: 1;
	}

	@media (min-width: 1000px) {
		min-height: 93vh;
		/* padding-top: 10rem; */
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: clamp(20vw, 30vw + 5vw, 35vw);
			/* align-self: start; */
		}
	}
`;
