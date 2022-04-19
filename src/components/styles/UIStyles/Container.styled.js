import styled from 'styled-components';

export const Section = styled.section`
	height: 93vh;
	width: 100%;
	background-color: ${(props) => props.theme.colors.primary.background};
`;

export const FlexContainer = styled.div`
	display: flex;
	height: 100%;
	width: auto;
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
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
	padding: 2rem;
	height: 60vh;
	width: 40vw;
	max-width: 600px;
	z-index: 10;
`;

export const StyledSlider = styled.div`
	max-width: 700px;
	height: 500px;
	position: relative;
	overflow: hidden;
`