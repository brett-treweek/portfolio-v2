import styled from 'styled-components';

export const StyledAbout = styled.section`
	h2 {
		font-weight: 400;
		font-size: clamp(2vh, 4vh, 4vh);
		margin-bottom: 2rem;
		color: ${(props) => props.theme.text};
	}

	h3 {
		font-weight: 400;
		font-size: clamp(2vh, 2.5vh, 4vh);
		margin-bottom: 2rem;
		color: ${(props) => props.theme.faded};
	}

	p {
		font-size: clamp(1rem, 1.5rem, 2rem);
		line-height: 1.5;
		letter-spacing: 0.05ch;
		color: ${(props) => props.theme.text};
	}
`;