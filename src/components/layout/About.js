import { BackgroundAccent } from '../styles/UI/Background.styled';
import {
	Section,
	FlexContainer,
	Card,
	Title,
} from '../styles/UI/Container.styled';
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
				<FlexContainer ai='center' jc='center'>
					{aboutData.map((about) => {
						return (
							<Card key={about.title}>
								<h2>{about.title}</h2>
								<p>{about.body}</p>
							</Card>
						)
					})}
				</FlexContainer>
			</Section>
		</StyledAbout>
	);
};

export default About;
