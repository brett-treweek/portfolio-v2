import { StyledResume } from '../styles/layoutStyles/Resume.styled';
import { Section, Title } from '../styles/UIStyles/Container.styled';
import {
	BackgroundAccent,
	HeadingAccent,
} from '../styles/UIStyles/Background.styled';

const Resume = (props) => {
	return (
		<StyledResume>
			<BackgroundAccent left>
				<Title>resume</Title>
			</BackgroundAccent>
			<Section></Section>
		</StyledResume>
	);
};

export default Resume;
