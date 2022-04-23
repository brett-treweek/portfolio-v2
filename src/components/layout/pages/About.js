import {
	BackgroundAccent,
	Section,
	Title,
} from '../../styles/UIStyles/UiStyles';
import { StyledAbout } from '../../styles/layoutStyles/About.styled';
import Carousel from '../UI/Carousel';
import aboutData from '../../../assets/aboutData';

const About = (props) => {
	console.log('about rendered');

	return (
		<StyledAbout id="about">
			<Section>
				<Title>about</Title>
				<Carousel data={aboutData} />
			</Section>
		</StyledAbout>
	);
};

export default About;
