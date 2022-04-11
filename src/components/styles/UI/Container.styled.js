import styled from 'styled-components';

export const StyledContainer = styled.section`
	height: 95vh;
	width: 100%;
	background-color: ${(props) => props.theme.colors.primary.background};
`;

export const FlexContainer = styled.div`
	display: flex;
	height: 100%;
	width: auto;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
`;

export const Title = styled.h1`
	text-align: center;
	padding: 2rem;
	font-size: 120px;
	font-weight: 300;
	background-color: ${(props) => props.theme.colors.primary.background};
	color: ${(props) => props.theme.colors.primary.highlight};
`;

export const Card = styled.div`
	display: flex;
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	flex-direction: column;
	padding: 20px;
	height: 60vh;
	width: 45vw;
	max-width: 700px;
	z-index: 10;
`;
