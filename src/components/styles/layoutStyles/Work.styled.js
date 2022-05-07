import styled from 'styled-components';

export const StyledWork = styled.section`
	background-color: ${(props) => props.theme.background};

	.work-grid {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		height: 100%;
		width: auto;
	}

	.work {
		display: flex;
		align-items: end;
		overflow: hidden;
		box-shadow: ${(props) => props.theme.boxShadow};
		border-radius: 1rem;
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		user-select: none;
		height: 20rem;
		width: 70vw;
		transition: transform 500ms ease;
	}

	.work:hover,
	.work:focus-within {
		transform: scale(1.08);
	}

	.content-container {
		padding: 1.5rem;
		width: 100%;
		background: linear-gradient(
			hsl(0 0% 0% / 0.5),
			hsl(0 0% 0% / 0.7) 10%,
			hsl(0 0% 0% / 1)
		);
		transform: translateY(75%);
		transition: transform 500ms ease;
	}

	.work:focus-within .content-container {
		transition: 0ms;
	}

	.content-container > *:not(.card-title) {
		opacity: 0;
		transition: opacity 500ms linear;
	}

	.work:hover .content-container > *:not(.card-title),
	.work:focus-within .content-container > *:not(.card-title) {
		opacity: 1;
		transition-delay: 800ms;
	}

	.work:hover .content-container,
	.work:focus-within .content-container {
		transform: translateY(0);
		transition-delay: 500ms;
	}

	.card-title {
		margin-bottom: 1.5rem;
		position: relative;
		width: max-content;
		max-width: 100%;
		color: #fff;
		font-weight: 500;
		font-size: 1.3rem;
		letter-spacing: 0.05ch;
		transition: all linear 0.2;
	}

	/* .work:hover .card-title {
		color: ${({ theme }) => theme.highlight};
	} */

	.card-title::after {
		content: '';
		position: absolute;
		height: 3px;
		left: -1.5rem;
		bottom: -0.3rem;
		background-color: ${({ theme }) => theme.highlight};
		width: calc(100% + 1.5rem);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 500ms ease;
	}

	.work:hover .card-title::after,
	.work:focus-within .card-title::after {
		transform: scaleX(1);
	}

	.work p {
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.2;
		color: white;
	}

	.btn {
		padding: 0.4rem 0.5rem;
		margin: 0.5rem 0.5rem 0 0;
		border: none;
		background-color: ${({ theme }) => theme.secondary};
		color: white;
		border-radius: 5px;
		text-decoration: none;
		cursor: pointer;
	}

	.btn:hover,
	.btn:focus {
		background-color: ${({ theme }) => theme.main};
	}

	h1 {
		align-self: center;
	}

	@media (min-width: 1000px) {
		min-height: 93vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.work-grid {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(8, 0.8fr);
			grid-template-rows: repeat(6, 0.8fr);
			height: 100%;
			width: 100%;
			max-width: 1200px;
		}

		.work {
			height: 100%;
			width: 100%;
		}

		h1 {
			/* position: relative;
			top: 10vh;
			left: 10vw; */
		}

		.work:nth-child(1) {
			grid-column: 2 / 4;
			grid-row: 2 / 5;
		}
		.work:nth-child(2) {
			grid-column: 4 / 7;
			grid-row: 2 / 4;
		}
		.work:nth-child(3) {
			grid-column: 7 / 9;
			grid-row: 1 / 4;
		}
		.work:nth-child(4) {
			grid-column: 1 / 4;
			grid-row: 5 / 7;
		}
		.work:nth-child(5) {
			grid-column: 4 / 6;
			grid-row: 4 / 7;
		}
		.work:nth-child(6) {
			grid-column: 6 / 9;
			grid-row: 4 / 6;
		}
	}
`;

export const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0,0,0, 0.7);
`;
