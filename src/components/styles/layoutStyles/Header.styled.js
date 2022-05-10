import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${(props) => props.theme.background};
	padding: 3rem 0;

	.brett {
		text-align: start;
		margin: 0;
		font-size: clamp(3.5rem, 5vw + 1rem, 7.8rem);
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
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: clamp(20vw, 30vw + 5vw, 35vw);
		}
	}
`;
