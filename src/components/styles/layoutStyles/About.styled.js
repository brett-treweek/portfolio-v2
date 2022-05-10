import styled from 'styled-components';

export const StyledAbout = styled.section`
	background-color: ${(props) => props.theme.background};
	height: 100%;
	width: 100%;
	padding: 3rem 0;

	h1 {
		align-self: center;
	}

	@media (min-width: 1000px) {
		padding: 10rem 0;
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

	.about-card ul{
		padding: 1rem;
	}

	.about-card li {
		/* margin: 1rem; */
		font-size: clamp(0.8rem, 1vw + 0.3rem, 1.1rem);
		color: ${({ theme }) => theme.text};
		font-weight: 300;
		line-height: 1.3;
		list-style: none;
	}

	.item div {
		position: relative;
	}

	.item img {
		width: clamp(10vw, 75vw + 2rem, 90vw);
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
		top: 42%;
		cursor: pointer;
		transition: all linear 0.2s;
	}

	.arrow:hover,
	.arrow:focus {
		background-color: ${({ theme }) => theme.watermark};
	}

	.left {
		left: -8%;
	}
	.right {
		right: -8%;
	}

	@media (min-width: 1000px) {
		.about-card {
			padding: 3rem;
		}

		.arrow {
			top: 50%;
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