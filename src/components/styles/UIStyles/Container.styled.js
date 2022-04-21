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

export const StyledCarousel = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;

	.carousel-container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.item {
		opacity: 0;
	}

	.item img {
		max-width: 400px;
	}

	.arrow {
		width: 150px;
		height: 50px;
	}
`;
