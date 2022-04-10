import styled from 'styled-components';

export const StyledHeader = styled.header`
	.brett_portrait {
		margin-top: 50px;
		height: 60vh;
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
		top: 25px;
		left: 30px;
		font-size: 30px;
		font-weight: 300;
		color: ${(props) => props.theme.colors.primary.text};
	}
	p {
		width: 30vw;
		font-weight: 300;
		font-size: 25px;
		color: ${(props) => props.theme.colors.primary.text};
	}
`;
