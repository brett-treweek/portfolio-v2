import { StyledHeader } from '../styles/Header.styled';
import { StyledMainContainer } from '../styles/MainContainer.styled';
import { BackgroundAccent } from '../styles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/HeadingAccent.styled';
import Nav from '../UI/Nav';

const Header = (props) => {
	return (
		<StyledHeader>
			<Nav />
			<StyledMainContainer>
				<HeadingAccent/>
				<BackgroundAccent/>
				<h3>hello there</h3>
				<h1>im brett</h1>
			</StyledMainContainer>
		</StyledHeader>
	);
};

export default Header;
