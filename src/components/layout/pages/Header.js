import { StyledHeader } from '../../styles/layoutStyles/Header.styled';
import {
	FlexContainer,
	Card,
	Section,
} from '../../styles/UIStyles/UiStyles';
import img5 from '../../../assets/Images/about/img6.jpg';
import { motion } from 'framer-motion';

const Header = (props) => {
	return (
		<StyledHeader>
			<Section>
				<FlexContainer ai='center' jc='center' gap='10rem'>
					<Card>
						<div>
							<span>hello there</span>
							<motion.h1 animate={{opacity: 1}} transition={{ease: 'linear', duration: 2.5}}>im brett</motion.h1>
						</div>

						<h3>Full Stack Web Developer</h3>
						<h4>(in development)</h4>
						<p>
							I have just completed a certificate in web development with the University of Western Australia. I am excited and highly motivated to turn my hobby into my new career. Please check out my work and get in touch.
						</p>
					</Card>
					<Card jc="center" ai="center">
						<img src={img5} alt="" />
					</Card>
				</FlexContainer>
			</Section>
		</StyledHeader>
	);
};

export default Header;
