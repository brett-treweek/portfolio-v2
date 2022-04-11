import styled from 'styled-components';

export const StyledHeader = styled.header`
	h1 {
		font-size: 120px;
		font-weight: 300;
		color: ${(props) => props.theme.colors.primary.highlight};
		margin-bottom: 50px;
	}
	h2 {
		font-size: 65px;
		font-weight: 300;
		color: ${(props) => props.theme.colors.primary.text};
	}
	h3 {
		font-size: 45px;
		font-weight: 300;
		color: ${(props) => props.theme.colors.primary.text};
	}
	h4 {
		font-size: 40px;
		font-weight: 300;
		margin-bottom: 50px;
		color: ${(props) => props.theme.colors.primary.faded};
	}
	span {
		position: relative;
		left: 40px;
		top: 20px;
		font-size: 30px;
		font-weight: 300;
		color: ${(props) => props.theme.colors.primary.text};
	}
	p {
		width: 100%;
		font-weight: 300;
		font-size: 25px;
		color: ${(props) => props.theme.colors.primary.text};
	}
	img {
		width: 100%;
		max-width: 30vw;
	}
`;
