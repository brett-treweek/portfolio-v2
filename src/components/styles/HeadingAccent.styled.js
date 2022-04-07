import styled from 'styled-components';

export const HeadingAccent = styled.div`
	position: absolute;
	top: 5vh;
    left: 0vw;
	height: 15vh;
	width: 0.6vw;
	background-color: ${(props) => props.theme.colors.primary.main};
`;
