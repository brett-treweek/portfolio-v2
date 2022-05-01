import { StyledHeader } from '../../styles/layoutStyles/Header.styled';
import { FlexContainer, Card, Section, BackgroundAccent } from '../../styles/UIStyles/UiStyles';
import img5 from '../../../assets/Images/about/img6.jpg';
import { motion } from 'framer-motion';

const Header = (props) => {
	return (
		<StyledHeader>
			<Section>
			{/* <BackgroundAccent right/> */}
				<FlexContainer ai="center" jc="center" gap='4rem'>
					<Card dis='block'>
						<div>
							<span>hello there</span>
							<motion.h1
								className='brett'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2 }}
							>
								im brett
							</motion.h1>
						</div>

						<h3>Full Stack Web Developer</h3>
						<h4>(in development)</h4>
						<p>
							I have just completed a certificate in web
							development with the University of Western
							Australia. I am excited and highly motivated to turn
							my hobby into my new career. Please check out my
							work and get in touch.
						</p>
					</Card>
					<img src={img5} alt="" />
				</FlexContainer>
			</Section>
		</StyledHeader>
	);
};

export default Header;
