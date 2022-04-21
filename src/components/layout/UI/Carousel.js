import { useState } from 'react';
import { StyledCarousel } from '../../styles/UIStyles/Container.styled';
import { motion } from 'framer-motion';

const Carousel = ({ data }) => {
	const [current, setCurrent] = useState(0);
	const length = data.length;

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	console.log(current);

	if (!Array.isArray(data) || data.length <= 0) {
		return null;
	}

	return (
		<StyledCarousel>
			<button className="arrow" onClick={prevSlide}>
				left
			</button>
			<button className="arrow" onClick={nextSlide}>
				right
			</button>
			<div className="carousel-container">
				{data.map((item, index) => (
					<motion.div key={index}>
						{index === current && (
							<motion.div
								className="item"
								animate={{ opacity: 1, scale: 1.2 }}
								transition={{ duration: 0.5 }}
							>
								<h1>{item.title}</h1>
								<motion.img src={item.image} alt="" />
							</motion.div>
						)}
					</motion.div>
				))}
			</div>
		</StyledCarousel>
	);
};

export default Carousel;
