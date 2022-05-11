import styled from 'styled-components';

const StyledFooter = styled.footer`
	height: 5vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.background};
	box-shadow: ${({ theme }) => theme.boxShadow};
    display: flex;
    align-items: center;
    justify-content: center;

	p {
		font-size: 0.5rem;
		color: ${({ theme }) => theme.text};
	}
    #logo {
        font-size: 10px;
    }
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<p>Created by Brett Treweek 2022</p>
		</StyledFooter>
	);
};
