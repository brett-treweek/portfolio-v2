import { useState } from 'react';
import {
	FlexContainer,
	StyledCarousel,
	Card,
} from '../../styles/UIStyles/UiStyles';
import Dots from './Dots';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Carousel = (props) => {
	const [current, setCurrent] = useState(0);
	const length = props.data.length;

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const dotClick = (index) => {
		setCurrent(index);
	};

	if (!Array.isArray(props.data) || props.data.length <= 0) {
		return null;
	}

	return (
		<StyledCarousel>
			<div className="carousel-container">
				{props.data.map((item, index) => (
					<div key={index} className="item-container">
						{index === current && (
							<>
								<div className="item">
									<FlexContainer ai="center" jc="center">
										<Card
											bc={(props) =>
												props.theme.secondary
											}
											bs
											initial={{
												opacity: 0,
												y: '50px',
											}}
											animate={{
												opacity: 1,
												y: 0,
											}}
											transition={{ duration: 1 }}
										>
											<h2>{item.title}</h2>
											<h3>{item.subTitle}</h3>
											<p>{item.body}</p>
											<Icon
												icon="eva:arrow-ios-back-fill"
												height="25"
												onClick={prevSlide}
												className="arrow left"
											/>
											<Icon
												icon="eva:arrow-ios-forward-fill"
												height="25"
												onClick={nextSlide}
												className="arrow right"
											/>
										</Card>
										<motion.img
											src={item.image}
											alt=""
											initial={{
												opacity: 0,
												scale: 0.9,
											}}
											animate={{
												opacity: 1,
												scale: 1,
											}}
											transition={{
												duration: 1,
												delay: 0.8,
											}}
										/>
									</FlexContainer>
								</div>
								<Dots
									data={props.data}
									dotClick={dotClick}
									active={current}
								/>
							</>
						)}
					</div>
				))}
			</div>
		</StyledCarousel>
	);
};

export default Carousel;
