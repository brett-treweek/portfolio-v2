import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { StyledAbout } from '../styles/layoutStyles/About.styled';
import { Title } from '../styles/helperStyles/Title.styled';


const About = (props) => {
	return (
		<StyledAbout>
			<StyledMainContainer>
				{/* <BackgroundAccent left /> */}
				<HeadingAccent right>
					<Title>about</Title>
				</HeadingAccent>
			</StyledMainContainer>
		</StyledAbout>
	);
};

export default About;
