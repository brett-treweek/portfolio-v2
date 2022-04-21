import { StyledResume } from '../../styles/layoutStyles/Resume.styled';
import {
	BackgroundAccent,
	HeadingAccent,
	Section,
	Title,
} from '../../styles/UIStyles/UiStyles';

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
