import { StyledResume } from '../styles/layoutStyles/Resume.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import { Title } from '../styles/helperStyles/Title.styled';

const Resume = (props) => {
	return (
		<StyledResume>
			<StyledMainContainer>
				{/* <BackgroundAccent left/> */}
				<HeadingAccent right>
					<Title>resume</Title>
				</HeadingAccent>
			</StyledMainContainer>
		</StyledResume>
	);
};

export default Resume;
