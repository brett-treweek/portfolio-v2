import styled from 'styled-components';

export const StyledWork = styled.section`
	padding: 3rem 0;
	background-color: ${(props) => props.theme.background};

	.projects-github {
		width: clamp(160px, 100px + 20vw, 380px);
		filter: ${(props) => props.theme.filter};
		margin-bottom: 2.5rem;
	}

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
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		user-select: none;
		height: 20rem;
		width: clamp(10vw, 75vw + 2rem, 90vw);
		max-width: 500px;
		box-shadow: ${({ theme }) => theme.boxShadow};
		transition: all 300ms ease;
	}

	.work:hover {
		transform: scale(1.05);
	}

	.content-container {
		padding: 1rem;
		width: 100%;
		background: linear-gradient(
			hsl(0 0% 0% / 0.6),
			hsl(0 0% 0% / 0.85) 10%,
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
		letter-spacing: 0.07ch;
	}

	.card-title::after {
		content: '';
		position: absolute;
		height: 2px;
		left: -1rem;
		bottom: -0.3rem;
		background-color: ${({ theme }) => theme.highlight};
		width: calc(100% + 1rem);
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
		font-size: clamp(0.9rem, 1vw + 0.3rem, 1rem);
		line-height: 1.2;
		color: white;
		letter-spacing: 0.04ch;
	}

	.button-container {
		width: 100%;
		height: 100%;
		display: inline-flex;
		justify-content: start;
		align-items: flex-start;
		gap: 1rem;
		margin-top: 1rem;
	}

	.btn {
		padding: 0.5rem 1.3rem;
		border: none;
		background-color: ${({ theme }) => theme.secondary};
		border-radius: 5px;
		cursor: pointer;
		transition: all 0.4s ease;
	}

	.btn a {
		text-decoration: none;
		color: white;
		font-weight: 500;
		letter-spacing: 0.09ch;
	}

	.github {
		align-self: flex-end;
		color: ${({ theme }) => theme.secondary};
		height: 32px;
		width: 32px;
		transition: all 0.4s ease;
	}

	.github:hover,
	.github:focus {
		color: ${({ theme }) => theme.main};
	}

	.btn:hover,
	.btn:focus {
		background-color: ${({ theme }) => theme.main};
	}

	h1 {
		align-self: center;
	}

	@media (min-width: 1000px) {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 1rem 1rem;

		.projects-github {
			margin-bottom: 0;
		}

		.work-grid {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(8, 1fr);
			grid-template-rows: repeat(6, 0.7fr);
			height: 100%;
			width: 100%;
			max-width: 1200px;
			max-height: 800px;
		}

		.work {
			height: 100%;
			width: 100%;
		}

		.content-container {
			height: 100%;
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
