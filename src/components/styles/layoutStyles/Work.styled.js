import styled from 'styled-components';

export const StyledWork = styled.section`
	background-color: ${(props) => props.theme.background};

	.work-grid {
		/* border: solid 4px greenyellow; */
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		height: 100%;
		width: 100%;
	}

	.work {
		border: solid 3px black;
		border-radius: 10px;
		padding: 1rem;
	}

	h1 {
		align-self: flex-start;
	}

	@media (min-width: 1000px) {
        height: 93vh;

		.work-grid {
			/* border: solid 4px greenyellow; */
			display: grid;
			gap: 1.5rem;
			grid-template-columns: repeat(8, 115px);
			grid-template-rows: repeat(7, 110px);
			height: 100%;
			width: 100%;
		}

		.work:nth-child(1) {
			background: red !important;
			grid-column: 2 / 4;
			grid-row: 2 / 5;
		}
		.work:nth-child(2) {
			background: blue !important;
			grid-column: 4 / 7;
			grid-row: 2 / 4;
		}
		.work:nth-child(3) {
			background: orange !important;
			grid-column: 7 / 9;
			grid-row: 1 / 4;
		}
		.work:nth-child(4) {
			background: yellow !important;
			grid-column: 1 / 4;
			grid-row: 5 / 7;
		}
		.work:nth-child(5) {
			background: greenyellow !important;
			grid-column: 4 / 6;
			grid-row: 4 / 7;
		}
		.work:nth-child(6) {
			background: purple !important;
			grid-column: 6 / 9;
			grid-row: 4 / 6;
		}
	}
`;
