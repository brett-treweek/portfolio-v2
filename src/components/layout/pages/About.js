import { BackgroundAccent, Section, Title } from '../../styles/UIStyles/UiStyles';
import { StyledAbout } from '../../styles/layoutStyles/About.styled';
import Carousel from '../UI/Carousel';
import aboutData from '../../../assets/aboutData';


const About = (props) => {
	console.log('about rendered');

	return (
		<StyledAbout id="about">
			<BackgroundAccent left>
				<Title>about</Title>
			</BackgroundAccent>
			<Section>
				<Carousel data={aboutData}/>
			</Section>
		</StyledAbout>
	);
};

export default About;
