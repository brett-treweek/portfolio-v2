import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	height: 25px;
	width: 25px;
	z-index: 99;
	.path {
		filter: ${(props) => props.theme.filter};
	}
`;

const Path = (props, theme) => (
	<motion.path
		stroke='black'
		className='path'
		fill="transparent"
		strokeLinecap="round"
		strokeWidth="3"
		{...props}
	/>
);

const transition = { duration: 0.33 };

export const Hamburger = ({ toggle, isOpen }) => {
	return (
		<Button onClick={toggle}>
			<svg width="25" height="25" viewBox="0 0 23 23">
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: {
							d: 'M 2 2.5 L 20 2.5',
							// stroke: 'black'
						},
						open: {
							d: 'M 3 16.5 L 17 2.5',
							// stroke: 'black'
						},
					}}
					transition={transition}
				/>
				<Path
					d="M 2 9.423 L 20 9.423"
					// stroke='black'
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={transition}
				/>
				<Path
					animate={isOpen ? 'open' : 'closed'}
					initial={false}
					variants={{
						closed: {
							d: 'M 2 16.346 L 20 16.346',
							// stroke: 'black',
						},
						open: {
							d: 'M 3 2.5 L 17 16.346',
							// stroke: 'black',
						},
					}}
					transition={transition}
				/>
			</svg>
		</Button>
	);
};
