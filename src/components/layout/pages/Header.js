import { StyledHeader } from '../../styles/layoutStyles/Header.styled';
import { FlexContainer, Card, Section } from '../../styles/UIStyles/UiStyles';
import img1 from '../../../assets/Images/about/img1.jpg';
import { motion } from 'framer-motion';

const Header = (props) => {
	return (
		<StyledHeader id='header'>
			<Section>
				<FlexContainer ai="center" jc="center" gap="4rem">
					<Card dis="block">
						<div>
							<motion.span
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3, duration: 0.4 }}
							>
								hello there
							</motion.span>
							<motion.h6
								className="brett"
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: [1, 1.05, 1] }}
								transition={{ delay: 1, duration: 0.7 }}
							>
								im brett
							</motion.h6>
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.7, duration: 1 }}
						>
							<h3>Full Stack Web Developer</h3>
							<h4>(in development)</h4>
							<p>
								I have just completed a certificate in web
								development with the University of Western
								Australia. I am excited and highly motivated to
								turn my hobby into my new career. Please check
								out my work and get in touch.
							</p>
						</motion.div>
					</Card>
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2, duration: 1 }}
						src={img1}
						alt="portrait of brett on charles bridge"
					/>
				</FlexContainer>
			</Section>
		</StyledHeader>
	);
};

export default Header;
