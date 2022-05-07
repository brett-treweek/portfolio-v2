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

	@media (min-width: 1000px) {
		min-height: 93vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
