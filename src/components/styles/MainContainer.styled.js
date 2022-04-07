import styled from 'styled-components';

export const StyledMainContainer = styled.section`
	position: absolute;
	height: 93vh;
	width: 100%;
	/* display: flex;
	justify-content: space-between;
	align-items: center; */
	background-color: ${(props) => props.theme.colors.primary.background};
`;
