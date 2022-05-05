import styled from 'styled-components';

export const StyledAbout = styled.section`
	background-color: ${(props) => props.theme.background};

	/* height: 100%;
	width: 100%; */
	h1 {
		align-self: flex-start;
		margin-left: 15vw;
	}

	@media (min-width: 1200px) {
		height: 93vh;
	}
`;