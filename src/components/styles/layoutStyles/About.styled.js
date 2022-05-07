import styled from 'styled-components';

export const StyledAbout = styled.section`
	background-color: ${(props) => props.theme.background};
	height: 100%;
	width: 100%;

	h1 {
		align-self: center;
	}

	@media (min-width: 1000px) {
		min-height: 93vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const StyledCarousel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
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
		width: clamp(10vw, 70vw + 5vw, 75vw);
		height: auto;
		max-width: 500px;
	}

	.item .arrow {
		color: ${(props) => props.theme.text};
		width: clamp(0.5rem, 1vw + 1rem, 5rem);
		z-index: 100;
		position: absolute;
		bottom: -2.5rem;
		cursor: pointer;
	}

	.arrow:hover {
		color: ${(props) => props.theme.highlight};
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

		.item img {
			width: clamp(200px, 450px + 1vw, 500px);
			height: clamp(300px, 800px, 800px);
		}
	}
`;

export const StyledDots = styled.div`
	width: 100%;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Dot = styled.span`
	padding: 5px;
	margin: 10px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.active ? props.theme.text : props.theme.faded};
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background-color: ${(props) => props.theme.highlight};
	}
`;