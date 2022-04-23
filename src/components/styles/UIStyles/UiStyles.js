import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
	height: 93vh;
	width: 100%;
	background-color: ${(props) => props.theme.colors.primary.background};
`;

export const FlexContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	gap: ${({ gap }) => gap || '4rem'};
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
`;

export const Title = styled.h1`
	padding: 2rem;
	margin-left: 2rem;
	font-size: 120px;
	font-weight: 300;
	background-color: transparent;
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
	color: white;
	z-index: 10;

	img {
		width: 40vw;
		max-width: 500px;
	}
`;

export const StyledCarousel = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	.carousel-container {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: center;
		background-color: transparent;
	}

	.item {
		opacity: 0;
	}

	.item img {
		max-width: 500px;
	}

	.arrow {
		position: absolute;
		top: 30%;
		cursor: pointer;
	}

	.arrow:hover{
		color: pink;
	}

	.left{
		left: 35px
	}
	.right{
		right: 35px
	}
`;

export const StyledDots = styled.div`
	width: 100%;
	height: 2rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Dot = styled.span`
	padding: ${(props) => (props.active ? '15px' : '12px')};
	margin: 10px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active ? 'yellow' : props.theme.colors.primary.main};
	cursor: pointer;
`;

export const BackgroundAccent = styled.div`
	position: absolute;
	left: ${(props) => (props.left ? '8vw' : null)};
	right: ${(props) => (props.right ? '8vw' : null)};
	/* max-height: 100vh; */
	height: 90vh;
	width: 30vw;
	max-width: 550px;
	background-color: ${(props) => props.theme.colors.primary.main};
`;

// export const HeadingAccent = styled.div`
// 	height: 100%;
// 	width: 1.5%;
// 	background-color: ${(props) => props.theme.colors.primary.main};
// `;

// export const Watermark = styled.img`
// 	position: absolute;
// 	top: 0vh;
// 	left: -5vw;
// 	height: 90vh;
// 	width: 70vw;
// 	max-width: 1300px;
// 	z-index: -1;
// `;
