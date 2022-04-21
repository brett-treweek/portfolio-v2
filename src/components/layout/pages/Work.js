import {
	BackgroundAccent,
	Section,
	Title,
} from '../../styles/UIStyles/UiStyles';
import { StyledWork } from '../../styles/layoutStyles/Work.styled';

const Work = (props) => {
	return (
		<StyledWork id='work'>
			<BackgroundAccent right>
				<Title>work</Title>
			</BackgroundAccent>
			<Section></Section>
		</StyledWork>
	);
};

export default Work;
