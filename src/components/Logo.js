import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
	const style = {
		position: 'sticky',
		top: '0',
		display: 'flex',
		height: '8vh',
		width: '100vw',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	};

	const variants = {
		fullscreen: { height: '100vh' },
		nav: { height: '6vh' },
	};

	return (
		<motion.div
			layout={'position'}
			style={style}
			variants={variants}
			initial="fullscreen"
			animate="nav"
			transition={{
				ease: 'easeOut',
				duration: 2,
				delay: 4,
			}}
		>
			<motion.h1
				layout={'position'}
				initial={{ position: 'fixed', fontSize: '3rem' }}
				animate={{
					position: 'fixed',
					left: '3px',
					top: '3px',
					fontSize: '2rem',
				}}
				transition={{
					ease: 'easeInOut',
					type: 'tween',
					duration: 1.8,
					delay: 1.5,
				}}
				transitionEnd={{}}
				style={{
					color: '#fff',
					fontSize: '3rem',
					fontFamily: 'serif',
					margin: '15px',
				}}
			>
				Brett Treweek
			</motion.h1>
		</motion.div>
	);
}
