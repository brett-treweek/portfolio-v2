import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { StyledAbout } from '../styles/layoutStyles/About.styled';
import { Card } from '../styles/helperStyles/Card.styled';
import { FlexContainer } from '../styles/helperStyles/FlexContainer.styled';
// import portrait from '../../assets/brett_portrait.jpg';

const About = (props) => {
	return (
		<StyledAbout>
			<StyledMainContainer>
				<BackgroundAccent left />
				<HeadingAccent right />
				<FlexContainer>
					<Card>
						<span>hello there</span>
						<h1>im brett</h1>
						<h3>Full Stack Web Developer</h3>
						<h4>( in development )</h4>
					</Card>
					{/* <img src={portrait} alt="" className="brett_portrait" /> */}
				</FlexContainer>
			</StyledMainContainer>
		</StyledAbout>
	);
};

export default About;
