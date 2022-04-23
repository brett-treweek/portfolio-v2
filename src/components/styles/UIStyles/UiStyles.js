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
	/* width: 100%; */
	gap: 10rem;
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	flex-direction: ${({ reverse }) => reverse && 'row-reverse'};
	overflow: hidden;
`;

export const Title = styled.h1`
	text-align: center;
	padding: 2rem;
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

export const StyledCarousel = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	/* z-index: 2; */

	.carousel-container {
		height: 70vh;
		width: 90vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		z-index: 10;
	}

	.item {
		opacity: 0;
	}

	.item img {
		height: 60vh;
		width: 30vw;
	}

	.arrow {
		margin: 1rem;
	}
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
