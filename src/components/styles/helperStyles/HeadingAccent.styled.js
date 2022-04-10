import styled from 'styled-components';
import { motion } from 'framer-motion';


export const HeadingAccent = styled(motion.div)`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.left ? 'end' : null)};
	top: 10vh;
	left: ${(props) => (props.left ? '0vw' : null)};
	right: ${(props) => (props.right ? '0vw' : null)};
	height: 15vh;
	width: 35vw;
	background-color: ${(props) => props.theme.colors.primary.main};
`;
 