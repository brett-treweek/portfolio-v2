import { StyledHeader } from "../styles/Header.styled";
import MainContainer from "../UI/MainContainer";
import Nav from "../UI/Nav";

const Header = props => {

    return <StyledHeader>
        <Nav/>
        <MainContainer/>  
    </StyledHeader>
}

export default Header;