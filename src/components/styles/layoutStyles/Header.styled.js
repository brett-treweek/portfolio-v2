import styled from 'styled-components';

export const StyledHeader = styled.header`
	height: 100%;
	width: 100%;

	.brett {
		text-align: start;
		margin: 0;
		font-size: clamp(1.5rem, 5vw + 1rem, 7.8rem);
		font-weight: 400;
		color: ${(props) => props.theme.highlight};
	}

	@media (min-width: 1000px) {
		height: 93vh;
	}
`;
