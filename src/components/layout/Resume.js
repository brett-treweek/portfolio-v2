import { StyledResume } from '../styles/layoutStyles/Resume.styled';
import { StyledContainer, Title } from '../styles/UI/Container.styled';
import {
	BackgroundAccent,
	HeadingAccent,
} from '../styles/UI/Background.styled';

const Resume = (props) => {
	return (
		<StyledResume>
			<BackgroundAccent left>
				<Title>resume</Title>
			</BackgroundAccent>
			<StyledContainer></StyledContainer>
		</StyledResume>
	);
};

export default Resume;
