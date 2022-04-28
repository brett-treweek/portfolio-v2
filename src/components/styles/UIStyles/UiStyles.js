import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${(props) => props.theme.background};
`;

export const FlexContainer = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	gap: ${({ gap }) => gap || '3rem'};
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	flex-direction: ${({ fd }) => fd || 'column'};
	height: ${({ height }) => height};

	h1 {
		font-size: clamp(1.5rem, 5vw + 1rem, 7.9rem);
		opacity: 0;
		font-weight: 400;
		color: ${(props) => props.theme.highlight};
		margin-bottom: 2rem;
	}
	h2 {
		font-size: clamp(0.5rem, 2vw + 1rem, 3rem);
		font-weight: 300;
		margin-bottom: 1rem;
		color: ${(props) => props.theme.text};
	}
	h3 {
		font-size: clamp(0.5rem, 1vw + 0.8rem, 1.8rem);
		font-weight: 300;
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
		font-weight: 200;
		font-size: clamp(0.6rem, 1vw + 0.6rem, 1.4rem);
		margin-top: 1rem;
		line-height: 1.4rem;
		letter-spacing: 0.05ch;
		color: ${(props) => props.theme.text};
	}

	img {
		width: clamp(50vw, 70vw, 90vw);
		overflow: hidden;
		/* max-height: 60vh; */
	}

	@media (min-width: 1000px) {
		flex-direction: row;

		p{
			line-height: 1.9rem;
		}

		img {
			width: clamp(20vw, 30vw + 5vw, 35vw);
			max-width: 600px;
		}
	}
`;

export const Card = motion(styled.div`
	display: ${({ dis }) => dis || 'flex'};
	align-items: ${({ ai }) => ai};
	justify-content: ${({ jc }) => jc};
	background-color: ${({ bc }) => bc || 'transparent'};
	box-shadow: ${({ bs }) => (bs ? '0 0 10px rgba(0, 0, 0, 0.25)' : 'none')};
	flex-direction: column;
	padding: 1rem;
	width: clamp(30vw, 70vw + 5vw, 75vw);
	max-width: 500px;
	color: white;
	z-index: 10;

	@media (min-width: 1000px) {
		width: clamp(20vw, 35vw + 5vw, 40vw);
		height: 60vh;
	}
`);

export const Title = styled.h1`
	padding: 2rem;
	text-align: center ;
	font-size: clamp(1.5rem, 5vw + 1rem, 8rem);
	font-weight: 300;
	background-color: transparent;
	color: ${(props) => props.theme.highlight};
`;

export const StyledCarousel = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	.carousel-container {
		position: relative;
		height: 100%;
		max-width: 1500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-container {
		height: 100%;
	}

	.item {
		height: 100%;
		max-width: 1200px;
	}

	.item div {
		position: relative;
	}

	.item img {
		width: clamp(30vw, 70vw + 5vw, 75vw);
		height: auto;
		max-height: 60vh;
		max-width: 500px;
	}

	.item .arrow {
		color: ${(props) => props.theme.highlight};
		width: clamp(0.5rem, 1vw + 1rem, 5rem);
		z-index: 100;
		position: absolute;
		bottom: -2.5rem;
		cursor: pointer;
	}

	.arrow:hover {
		color: ${(props) => props.theme.text};
	}

	.left {
		left: 40%;
	}
	.right {
		right: 40%;
	}

	@media (min-width: 1000px) {
		.item .arrow {
			bottom: 1rem;
		}
	}
`;

export const StyledDots = styled.div`
	width: 100%;
	height: 2rem;
	margin: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Dot = styled.span`
	padding: 8px;
	margin: 10px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active ? props.theme.highlight : props.theme.faded};
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background-color: ${(props) => props.theme.text};
	}
`;

// export const BackgroundAccent = styled.div`
// 	position: absolute;
// 	left: ${(props) => (props.left ? '8vw' : null)};
// 	right: ${(props) => (props.right ? '8vw' : null)};
// 	max-height: 100vh;
// 	height: 90vh;
// 	width: 30vw;
// 	max-width: 550px;
// 	background-color: ${(props) => props.theme.main};
// `;

// export const HeadingAccent = styled.div`
// 	height: 100%;
// 	width: 1.5%;
// 	background-color: ${(props) => props.theme.main};
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
