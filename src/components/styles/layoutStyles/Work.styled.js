import styled from 'styled-components';

export const StyledWork = styled.section`
	background-color: ${(props) => props.theme.background};

	.work-grid {
		padding: 2rem;
		/* border: solid 4px greenyellow; */
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		height: 100%;
		width: 100%;
	}

	.work {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem 0;
		border-radius: 10px;
		box-shadow: ${({ theme }) => theme.boxShadow};
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		cursor: pointer;
		height: 20rem;
		width: 70vw;
	}

	.work div {
		width: 100%;
		background-color: ${(props) => props.theme.secondary};
		padding: 1rem;
		text-align: center;
	}

	.work h3 {
		width: 100%;
		color: ${(props) => props.theme.highlight};
		font-weight: 400;
		font-size: 1.5rem;
	}

	.work p {
		font-weight: 300;
		font-size: 1rem;
	}

	h1 {
		align-self: flex-start;
	}

	@media (min-width: 1200px) {
		height: 93vh;

		.work-grid {
			/* border: solid 4px greenyellow; */
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(8, 115px);
			grid-template-rows: repeat(7, 110px);
			height: 100%;
			width: 100%;
		}

		.work {
			height: auto;
			width: auto;
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
