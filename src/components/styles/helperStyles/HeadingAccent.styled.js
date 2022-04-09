import styled from 'styled-components';

export const HeadingAccent = styled.div`
	position: absolute;
	top: 15vh;
	left: ${(props) => (props.left ? '0vw' : null)};
	right: ${(props) => (props.right ? '0vw' : null)};
	height: 15vh;
	width: 0.6vw;
	background-color: ${(props) => props.theme.colors.primary.main};
`;
 