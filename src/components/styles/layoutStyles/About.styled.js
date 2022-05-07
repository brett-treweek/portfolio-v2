import styled from 'styled-components';

export const StyledAbout = styled.section`
	background-color: ${(props) => props.theme.background};
	/* border-bottom: solid grey 1px; */
	height: 100%;
	width: 100%;
	padding: 2rem;

	h1 {
		align-self: center;
	}

	@media (min-width: 1000px) {
		/* min-height: 93vh; */
		padding-top: 8rem;
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
		box-shadow: ${({ theme }) => theme.boxShadow};
		height: auto;
		max-width: 500px;
	}

	.arrow {
		color: ${({ theme }) => theme.highlight};
		background-color: ${({ theme }) => theme.watermarkLight};
		border-radius: 100%;
		width: 50px;
		height: 50px;
		z-index: 100;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		cursor: pointer;
		transition: all linear 0.2s;
	}

	.arrow:hover,
	.arrow:focus {
		background-color: ${({ theme }) => theme.watermark};
	}

	.left {
		left: -15%;
	}
	.right {
		right: -15%;
	}

	@media (min-width: 1000px) {
		.arrow {
			width: 70px;
			height: 70px;
		}

		.left {
			left: -3%;
		}
		.right {
			right: -3%;
		}

		.item img {
			width: clamp(200px, 500px, 500px);
			height: clamp(300px, 800px, 800px);
		}
	}
`;

export const StyledDots = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Dot = styled.span`
	/* transform: translateY(100%); */
	transform: translateX(-100%);
	padding: 7px;
	margin: 10px;
	border-radius: 100%;
	background-color: ${(props) =>
		props.active ? props.theme.highlight : props.theme.text};
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${(props) => props.theme.main};
	}
`;