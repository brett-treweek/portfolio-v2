import {
	BackgroundAccent,
} from '../styles/UIStyles/Background.styled';
import { Section, Title } from '../styles/UIStyles/Container.styled';
import { StyledWork } from '../styles/layoutStyles/Work.styled';

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
