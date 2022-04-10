import { StyledHeader } from '../styles/layoutStyles/Header.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import codePng from '../../assets/code.png';
import Nav from './Nav';
import { Watermark } from '../styles/helperStyles/Watermark.styled';
import { Card } from '../styles/helperStyles/Card.styled';
import { FlexContainer } from '../styles/helperStyles/FlexContainer.styled';
import portrait from '../../assets/brett_portrait.jpg'

const Header = (props) => {
	return (
		<StyledHeader>
			<Nav />
			<StyledMainContainer>
				<BackgroundAccent right/>
				<HeadingAccent left/>
				<Watermark src={codePng} alt="" />
				<FlexContainer>
					<Card>
						<span>hello there</span>
						<h1>im brett</h1>
						<h3>Full Stack Web Developer</h3>
						<h4>( in development )</h4>
					</Card>
					<img src={portrait} alt="" className='brett_portrait' />
				</FlexContainer>
			</StyledMainContainer>
		</StyledHeader>
	);
};

export default Header;
