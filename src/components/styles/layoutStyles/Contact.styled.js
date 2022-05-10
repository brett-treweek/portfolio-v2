import styled from 'styled-components';
export const StyledContact = styled.section`
	background-color: ${(props) => props.theme.background};
	height: 100%;
	width: 100%;
	padding: 3rem 0;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 1000px) {
		padding: 10rem 0;
	}
`;

export const StyledForm = styled.div`
	width: 500px;
	max-width: 90vw;
	padding: 2rem 1rem;
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.card};

	.contact-card {
		align-self: start;
		width: 100%;
	}

	h1 {
		text-align: center;
		font-size: clamp(1.5rem, 2vw + 1rem, 3rem);
		color: ${({ theme }) => theme.highlight};
		font-weight: 400;
		margin: 0 0 2rem;
	}

	h2,
	h3,
	h4,
	.link-container,
	.phone-container {
		color: ${({ theme }) => theme.text};
		font-weight: 400;
		margin-bottom: 1.5rem;
	}

	.phone-container,
	.link-container {
		display: inline-flex;
		gap: 1rem;
		align-items: center;
		justify-content: start;
	}

	.link {
		color: ${({ theme }) => theme.secondary};
		text-decoration: none;
	}

	.link:hover {
		color: ${({theme}) => theme.main}
	} 
	
	.icon a {
		width: max-content;
		margin-right: 1rem;
	}

	.textField {
		margin: 10px auto;
		color: #fff;
		border-radius: 4px;
		background-color: #fff;
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

	@media (min-width: 1000px) {
		padding: 3rem;
		width: 1048px
	}
`;
