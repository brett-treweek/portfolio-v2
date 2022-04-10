import styled from 'styled-components';

export const BackgroundAccent = styled.div`
	position: absolute;
	/* top: 7vh; */
	left: ${(props) => (props.left ? '6vw' : null)};
	right: ${(props) => (props.right ? '6vw' : null)};
	height: 93%;
	width: 30vw;
	max-width: 550px;
	background-color: ${(props) => props.theme.colors.primary.main};
`;