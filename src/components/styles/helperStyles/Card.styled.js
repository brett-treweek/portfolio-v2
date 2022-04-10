import styled from 'styled-components';

export const Card = styled.div` 

	h1 {
        font-size: 124px;
		font-weight: 400;
        margin-bottom: 100px;
		color: ${(props) => props.theme.colors.primary.highlight};
	}
    h3 {
        font-size: 50px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.primary.text};
    }
    h4 {
        font-size: 50px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.primary.faded};
    }
    span {
        font-size: 43px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.primary.text};
    }
    `;