import { BackgroundAccent } from '../styles/UI/Background.styled';
import {
	StyledContainer,
	FlexContainer,
	Card,
	Title,
} from '../styles/UI/Container.styled';
import { StyledAbout } from '../styles/layoutStyles/About.styled';

const About = (props) => {
	return (
		<StyledAbout>
			<BackgroundAccent left>
				<Title>
					about
				</Title>
			</BackgroundAccent>
			<StyledContainer>
				
			</StyledContainer>
		</StyledAbout>
	);
};

export default About;
