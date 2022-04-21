// import { useState, useRef, useEffect } from 'react';
import { BackgroundAccent } from '../styles/UIStyles/Background.styled';
import {
	Section,
	Title
} from '../styles/UIStyles/Container.styled';
import { StyledAbout } from '../styles/layoutStyles/About.styled';
// import { motion } from 'framer-motion';
import Carousel from './UI/Carousel';
import aboutData from '../../assets/aboutData';


const About = (props) => {
	console.log('about rendered');

	return (
		<StyledAbout id="about">
			<BackgroundAccent left>
				<Title>about</Title>
			</BackgroundAccent>
			<Section>
				<Carousel data={aboutData}/>
			</Section>
		</StyledAbout>
	);
};

export default About;
