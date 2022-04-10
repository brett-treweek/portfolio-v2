import styled from 'styled-components';

export const FlexContainer = styled.div`
	position: absolute;
	top: 10vh;
	display: flex;
	width: 100%;
	align-items: flex-start;
	justify-content: space-evenly;
	gap: 3rem;
	flex-direction: ${props => props.reverse && 'row-reverse'} ;
`;