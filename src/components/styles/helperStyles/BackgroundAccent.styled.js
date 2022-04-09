import styled from 'styled-components';

export const BackgroundAccent = styled.div`
	position: absolute;
	right: 6vw;
	height: 100%;
	width: 30vw;
	max-width: 550px;
	background-color: ${(props) => props.theme.colors.primary.main};
`;