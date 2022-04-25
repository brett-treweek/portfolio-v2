import styled from 'styled-components';

export const Section = styled.div`
	height: 93vh;
	width: 100%;
	background-color: ${(props) => props.theme.background};
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
	color: ${(props) => props.theme.highlight};
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
	/* width: 100%; */

	.carousel-container {
		position: relative;
		height: 100%;
		width: 95vw;
		max-width: 1500px;
		display: flex;
		align-items: start;
		justify-content: center;
		background-color: transparent;
	}

	.item-container {
		/* display: flex;
		align-items: center;
		justify-content: center; */
	}

	.item {
		max-width: 1200px;
		opacity: 0;
	}

	.item img {
		max-width: 500px;
	}

	.arrow {
		position: absolute;
		top: 45%;
		cursor: pointer;
		filter: invert(14%) sepia(69%) saturate(4320%) hue-rotate(230deg)
			brightness(78%) contrast(125%);
		/* transition: 0.1s ease; */
	}

	.arrow:hover {
		filter: invert(95%) sepia(58%) saturate(2134%) hue-rotate(317deg)
			brightness(117%) contrast(108%);
	}

	.left {
		left: 0;
	}
	.right {
		right: 0;
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
		props.active
			? props.theme.highlight
			: props.theme.main};
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background-color: ${(props) => props.theme.highlight};
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
	background-color: ${(props) => props.theme.main};
`;

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
