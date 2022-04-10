import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
	font-size: 120px;
	font-weight: 400;
	margin: 30px 100px 0px 100px;
	color: ${(props) => props.theme.colors.primary.highlight};

	.hello{
		position: relative;
		top: -99px;
		left: 175px;
	}
`;
