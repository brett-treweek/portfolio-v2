import styled from 'styled-components';
export const StyledContact = styled.section`
	background-color: ${(props) => props.theme.background};
	height: 100%;
	width: 100%;
	padding: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 1000px) {
		padding: 4rem;
		/* min-height: 93vh; */
	}
`;

export const StyledForm = styled.div`
	width: 1048px;
	max-width: 95vw;
	padding: 40px;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.card};

	.contact-card {
		align-self: start;
		width: 100%;
	}

	h1 {
		text-align: center;
		font-size: clamp(0.5rem, 2vw + 1rem, 3rem);
		color: ${({ theme }) => theme.highlight};
		font-weight: 400;
		margin: 0 0 2rem;
	}

	h2,
	h3,
	p {
		color: ${({ theme }) => theme.text};
		font-weight: 400;
		margin-bottom: 0.5rem;
	}

	.textField {
		margin: 10px auto;
		color: #fff;
		border-radius: 4px;
		background-color: #fff;
	}

	.textField label {
	}

	#btn {
		background-color: ${({ theme }) => theme.secondary};
		font-weight: bold;
	}
	#btn:hover {
		background-color: ${({ theme }) => theme.main};
	}

	#alert {
		color: #fff;
		background-color: green;
	}
`;
