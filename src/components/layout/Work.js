import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { StyledWork } from '../styles/layoutStyles/Work.styled';
import { Title } from '../styles/helperStyles/Title.styled';

const Work = (props) => {
	return (
		<StyledWork>
			<StyledMainContainer>
				{/* <BackgroundAccent right /> */}
				<HeadingAccent left>
					<Title>work</Title>
				</HeadingAccent>
			</StyledMainContainer>
		</StyledWork>
	);
};

export default Work;
