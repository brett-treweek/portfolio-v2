import { Section, FlexContainer } from '../../styles/UIStyles/UiStyles';
import workData from '../../../assets/workData';
import { StyledWork } from '../../styles/layoutStyles/Work.styled';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import projectImage from '../../../assets/Images/projects.svg';

const Work = (props) => {
	return (
		<StyledWork id="work">
			<Section>
				<img
					src={projectImage}
					alt="title projects with github logo"
					className="projects-github"
				>
				</img>
				<FlexContainer>
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
												<a
													href={item.link}
													target="_blank"
													rel="noreferrer"
												>
													View
												</a>
											</button>

											<a
												href={item.gitHub}
												target="_blank"
												rel="noreferrer"
											>
												<Icon
													className="github"
													icon="fa:github"
												/>
											</a>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</FlexContainer>
			</Section>
		</StyledWork>
	);
};

export default Work;
