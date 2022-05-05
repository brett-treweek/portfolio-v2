import { FlexContainer, Section } from '../../styles/UIStyles/UiStyles';
import { StyledAbout } from '../../styles/layoutStyles/About.styled';
import Carousel from '../UI/Carousel';
import aboutData from '../../../assets/aboutData';

const About = (props) => {
	console.log('about rendered');

	return (
		<StyledAbout id="about">
			<Section>
			<h1>about</h1>
				<FlexContainer reverse jc="space-evenly">
					<Carousel data={aboutData} />
				</FlexContainer>
			</Section>
		</StyledAbout>
	);
};

export default About;
