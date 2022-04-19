import { BackgroundAccent } from '../styles/UIStyles/Background.styled';
import {
	Section,
	FlexContainer,
	Card,
	Title,
} from '../styles/UIStyles/Container.styled';
import aboutData from '../../assets/aboutData.json'
import { StyledAbout } from '../styles/layoutStyles/About.styled';

const About = (props) => {
	return (
		<StyledAbout id='about'>
			<BackgroundAccent left>
				<Title>
					about
				</Title>
			</BackgroundAccent>
			<Section>
				
			</Section>
		</StyledAbout>
	);
};

export default About;
