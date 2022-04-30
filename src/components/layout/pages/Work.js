import {
	Section,
	Title,
	FlexContainer,
	Card,
} from '../../styles/UIStyles/UiStyles';
import workData from '../../../assets/workData';
import { StyledWork } from '../../styles/layoutStyles/Work.styled';

const Work = (props) => {

	const viewProject = (item, index) => {
		console.log(item.title);
	};

	return (
		<StyledWork id="work">
			<Section>
				<Title>work</Title>
				<FlexContainer jc="center" ai="center">
					{workData.map((item, index) => {
						return (
							<Card
								key={index}
								flex={index === 0 ? '1 1 90%' : '1 1 20%'}
								mw={index === 0 ? '90%' : '500px'}
								onClick={() => {viewProject(item, index)}}
							>
								<h2>{item.title}</h2>
								<h3>{item.subtitle}</h3>
								<p>{item.body}</p>
								{/* <img src={item.img} alt="" /> */}
							</Card>
						);
						
					})}
					{/* <Card flex="0 1 500px" mw='1000px'>one</Card>
					<Card flex="0 1 300px">two</Card>
					<Card flex="0 1 300px">three</Card>
					<Card flex="0 1 300px">four</Card>
					<Card flex="0 1 300px">five</Card> */}
				</FlexContainer>
			</Section>
		</StyledWork>
	);
};

export default Work;
