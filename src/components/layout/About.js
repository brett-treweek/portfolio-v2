import { useState, useRef, useEffect } from 'react';
import { BackgroundAccent } from '../styles/UIStyles/Background.styled';
import {
	Section,
	StyledSlider,
	Title,
	FlexContainer,
} from '../styles/UIStyles/Container.styled';
import aboutData from '../../assets/aboutData';
import { StyledAbout } from '../styles/layoutStyles/About.styled';
import { motion } from 'framer-motion';

const About = (props) => {
	console.log('about rendered');

	const slider = useRef();
	const [width, setWidth] = useState(undefined);

	const changeWidth = () => {
		setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
	};

	const dimensions = window.addEventListener('resize', changeWidth);

	useEffect(() => {
		setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
	}, [ dimensions]);

	console.log('prerender', width);

	return (
		<StyledAbout id="about">
			<BackgroundAccent left>
				<Title>about</Title>
			</BackgroundAccent>
			<Section>
				<FlexContainer ai="center">
					<StyledSlider
						ref={slider}
						whileTap={{ cursor: 'grabbing' }}
					>
						<motion.div
							className="inner-slider"
							drag="x"
							dragConstraints={{ right: 0, left: -width }}
						>
							{aboutData.map((item) => {
								return (
									<div className="item" key={item.image}>
										<img src={item.image} alt="" />
									</div>
								);
							})}
						</motion.div>
					</StyledSlider>
				</FlexContainer>
			</Section>
		</StyledAbout>
	);
};

export default About;
