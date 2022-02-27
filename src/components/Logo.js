import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
	const style = {
		display: 'flex',
		height: '100vh',
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	};

  const changePosition = {
    display: 'inline-block',
    top: '10px',
    left: '10px'
  }

	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	return (
		<div style={style}>
			<motion.h1
				layout
				variants={variants}
				initial="hidden"
				animate={['visible', changePosition]}
				transition={{
					duration: 4,
					layout: {  },
				}}
				style={{
					color: '#fff',
					fontSize: '4rem',
					fontFamily: 'serif',
					margin: '0px',
				}}
			>
				Brett Treweek
			</motion.h1>
		</div>
	);
}
