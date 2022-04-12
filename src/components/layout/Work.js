import {
	BackgroundAccent,
	HeadingAccent,
} from '../styles/UI/Background.styled';
import { StyledContainer, Title } from '../styles/UI/Container.styled';
import { StyledWork } from '../styles/layoutStyles/Work.styled';

const Work = (props) => {
	return (
		<StyledWork id='work'>
			<BackgroundAccent right>
				<Title>work</Title>
			</BackgroundAccent>
			<StyledContainer></StyledContainer>
		</StyledWork>
	);
};

export default Work;
