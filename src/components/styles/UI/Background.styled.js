import styled from 'styled-components';


export const BackgroundAccent = styled.div`
	position: absolute;
	left: ${(props) => (props.left ? '6vw' : null)};
	right: ${(props) => (props.right ? '6vw' : null)};
	height: 90%;
	width: 30vw;
	max-width: 550px;
	background-color: ${(props) => props.theme.colors.primary.main};
`;

export const HeadingAccent = styled.div`
	height: 100%;
	width: 1.5%;
	background-color: ${(props) => props.theme.colors.primary.main};
`;

export const Watermark = styled.img`
	position: absolute;
	top: 0vh;
	left: -5vw;
	height: 90vh;
	width: 70vw;
	max-width: 1300px;
	/* z-index: -1; */
`;