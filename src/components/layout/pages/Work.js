import {
	Section,
	Title,
	FlexContainer,
	Card,
} from '../../styles/UIStyles/UiStyles';
import workData from '../../../assets/workData';
import { StyledWork } from '../../styles/layoutStyles/Work.styled';
import img11 from '../../../assets/Images/about/img6.jpg';

const Work = (props) => {
	// const viewProject = (item, index) => {
	// 	console.log(item.title);
	// };

	return (
		<StyledWork id="work">
			<Section>
				<h1>projects</h1>
				<FlexContainer>
					<div>
						<div className="work-grid">
							<div className="work work-1 grid-col-span-2">
								<div>
									<h2>work 1</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
							<div className="work work-2">
								<div>
									<h2>work 2</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
							<div className="work work-3">
								<div>
									<h2>work 3</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
							<div className="work work-4">
								<div>
									<h2>work 4</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
							<div className="work work-5">
								<div>
									<h2>work 5</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
							<div className="work work-6">
								<div>
									<h2>work 6</h2>
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit.
									</p>
								</div>
							</div>
						</div>
					</div>
				</FlexContainer>
			</Section>
		</StyledWork>
	);
};

export default Work;

{
	/* <FlexContainer jc="center" ai="center">
	{workData.map((item, index) => {
		return (
			<div
				className={'work-card-' + index}
				key={index}
				flex={index === 0 ? '1 1 90%' : '1 1 18%'}
				mw={index === 0 ? '90%' : '500px'}
				onClick={() => {
					viewProject(item, index);
				}}
			>
				<h2>{item.title}</h2>
				<h3>{item.subtitle}</h3>
				<p>{item.body}</p>
				<img src={img11} alt="" />
			</div>
		);
	})}
</FlexContainer>; */
}
