import { StyledHeader } from '../styles/layoutStyles/Header.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import codePng from '../../assets/code.png';
import portrait from '../../assets/brett_portrait.jpg';
import Nav from './Nav';
import { FlexContainer } from '../styles/helperStyles/FlexContainer.styled';
import { Watermark } from '../styles/helperStyles/Watermark.styled';
import { Card } from '../styles/helperStyles/Card.styled';
import { Title } from '../styles/helperStyles/Title.styled';

const Header = (props) => {
	return (
		<StyledHeader>
			<Nav />
			<StyledMainContainer>
				<BackgroundAccent />
				<HeadingAccent />
				<Watermark src={codePng} alt="" />
				<Title>
					<Card>
						<span>hello there</span>
						<h1>im brett</h1>
						<h3>Full Stack Web Developer</h3>
						<h4>( in development )</h4>
					</Card>
				</Title>
			</StyledMainContainer>
		</StyledHeader>
	);
};

export default Header;
