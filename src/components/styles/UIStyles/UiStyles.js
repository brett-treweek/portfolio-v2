import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	user-select: none;
	/* padding: 2rem; */

	h1 {
		margin-bottom: 2.5rem;
		font-size: clamp(3.5rem, 5vw + 2rem, 6rem);
		font-weight: 400;
		color: ${(props) => props.theme.highlight};
	}
	h2 {
		font-size: clamp(0.5rem, 2vw + 1rem, 3rem);
		font-weight: 400;
		margin-bottom: 1rem;
		color: ${(props) => props.theme.main};
	}
	h3 {
		font-size: clamp(0.5rem, 1vw + 0.8rem, 1.8rem);
		font-weight: 400;
		color: ${(props) => props.theme.text};
	}
	h4 {
		font-size: clamp(0.4rem, 1vw + 0.7rem, 1.7rem);
		font-weight: 300;
		margin-bottom: 2rem;
		color: ${(props) => props.theme.faded};
	}
	span {
		position: relative;
		left: 15px;
		top: 10px;
		font-size: clamp(0.6rem, 1vw + 0.7rem, 1.7rem);
		font-weight: 300;
		color: ${(props) => props.theme.text};
	}
	p {
		width: 100%;
		font-weight: 300;
		font-size: clamp(1rem, 2vw + 0.3rem, 1.4rem);
		margin-top: 1rem;
		line-height: 1.3rem;
		color: ${(props) => props.theme.text};
	}

	

	@media (min-width: 1000px) {
		p {
			line-height: 1.5rem;
			/* font-weight: 400; */
			/* letter-spacing: 0.02ch; */
		}

		
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	gap: ${({ gap }) => gap || '3rem'};
	align-items: ${({ ai }) => ai || 'center'};
	justify-content: ${({ jc }) => jc || 'center'};
	height: ${({ height }) => height};

	@media (min-width: 1000px) {
		flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
	}
`;

export const Card = motion(styled.div`
	display: ${({ dis }) => dis || 'flex'};
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	flex: ${({ flex }) => flex};
	background-color: ${({ bc }) => bc || 'transparent'};
	box-shadow: ${(props) => (props.bs ? props.theme.boxShadow : 'none')};
	flex-direction: column;
	padding: 1rem;
	width: clamp(10vw, 75vw + 2rem, 90vw);
	max-width: ${({ mw }) => mw || '500px'};
	color: white;
	z-index: 10;

	@media (min-width: 1000px) {
		width: clamp(20vw, 35vw + 5vw, 40vw);
		height: ${({ height }) => height || '100%' };
	}
`);




export const BackgroundAccent = styled.div`
	position: absolute;
	left: ${(props) => (props.left ? '8vw' : null)};
	right: ${(props) => (props.right ? '8vw' : null)};
	max-height: 100vh;
	height: 90vh;
	width: 30vw;
	max-width: 550px;
	background-color: ${(props) => props.theme.main};
	z-index: 0;
`;

export const HeadingAccent = styled.div`
	height: 100%;
	width: 1.5%;
	background-color: ${(props) => props.theme.main};
`;

export const Watermark = styled.img`
	position: absolute;
	top: 0vh;
	left: -5vw;
	height: 90vh;
	width: 70vw;
	max-width: 1300px;
	z-index: -1;
`;
