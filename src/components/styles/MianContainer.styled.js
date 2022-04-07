import styled from 'styled-components';

export const StyledMainContainer = styled.section`
    height: 95vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme.colors.primary.background};
`