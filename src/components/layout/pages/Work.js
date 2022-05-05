import {
	Section,
	Title,
	FlexContainer,
	Card,
} from '../../styles/UIStyles/UiStyles';
import workData from '../../../assets/workData';
import { StyledWork } from '../../styles/layoutStyles/Work.styled';
import { motion } from 'framer-motion';

const Work = (props) => {
	return (
		<StyledWork id="work">
			<Section>
				<h1>projects</h1>
				<FlexContainer>
					<div>
						<div className="work-grid">
							{workData.map((item, index) => {
								return (
									<motion.div
										className="work"
										key={index}
										bgimg={item.img}
										style={{
											backgroundImage:
												'url(' + item.img + ')',
										}}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1.5 }}
									>
										<div className="content-container">
											<h3 className="card-title">
												{item.title}
											</h3>
											<p>{item.subtitle}</p>
											<p>{item.body}</p>
											<div className="button-container">
												<button className="btn">
													learn more
												</button>
												<button className="btn">
													git hub
												</button>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
				</FlexContainer>
			</Section>
		</StyledWork>
	);
};

export default Work;
