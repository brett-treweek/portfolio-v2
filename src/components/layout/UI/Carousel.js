import { useState } from 'react';
import {
	FlexContainer,
	StyledCarousel,
	Card,
} from '../../styles/UIStyles/UiStyles';
import Dots from './Dots';
import { motion } from 'framer-motion';
import leftArrow from '../../../assets/Images/leftArrow.svg';
import rightArrow from '../../../assets/Images/rightArrow.svg';

const Carousel = ({ data }) => {
	const [current, setCurrent] = useState(0);
	const length = data.length;

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const dotClick = (index) => {
		setCurrent(index);
	};

	console.log(current);

	if (!Array.isArray(data) || data.length <= 0) {
		return null;
	}

	return (
		<StyledCarousel>
			<div className="carousel-container">
				<img
					src={leftArrow}
					alt="left-arrow"
					className="arrow left"
					onClick={prevSlide}
				/>
				{data.map((item, index) => (
					<div key={index} className="item-container">
						{index === current && (
							<>
								<motion.div
									className="item"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.7 }}
								>
									<FlexContainer reverse={item.flex}>
										<Card>
											<h1>{item.title}</h1>
											<h2>This is frustrating</h2>
											<p>{item.body}</p>
										</Card>
										<motion.img src={item.image} alt="" />
									</FlexContainer>
								</motion.div>
								<Dots
									data={data}
									dotClick={dotClick}
									active={current}
								/>
							</>
						)}
					</div>
				))}
				<img
					src={rightArrow}
					alt="right-arrow"
					className="arrow right"
					onClick={nextSlide}
				/>
			</div>
		</StyledCarousel>
	);
};

export default Carousel;
