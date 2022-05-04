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
										<div>
											<h3>{item.title}</h3>
											<p>{item.subtitle}</p>
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
