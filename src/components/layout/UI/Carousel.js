import { Fragment, useState } from 'react';
import { FlexContainer, Card } from '../../styles/UIStyles/UiStyles';
import { StyledCarousel } from '../../styles/layoutStyles/About.styled';
import Dots from './Dots';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

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
					<div key={index} className="item-container" id={index}>
						{index === current && (
							<>
								<motion.div
									className="item"
									initial={{
										opacity: 0,
									}}
									animate={{
										opacity: 1,
									}}
									transition={{
										duration: 1,
									}}
								>
									<FlexContainer ai="center" jc="center">
										<Card
											className="about-card"
											bc={(props) => props.theme.card}
											bs
										>
											<h2>{item.title}</h2>
											{item.subTitle && (
												<h3>{item.subTitle}</h3>
											)}
											{item.body1 && <p>{item.body1}</p>}
											{item.body2 && <p>{item.body2}</p>}
											{item.body3 && <p>{item.body3}</p>}
											{item.body4 && <p>{item.body4}</p>}
											{item.bodyArray && (
												<ul>
													{item.bodyArray.map(
														(interest, i) => {
															return (
																<li key={i}>
																	{interest}
																</li>
															);
														}
													)}
												</ul>
											)}
										</Card>

										<img src={item.image} alt="" />
									</FlexContainer>
								</motion.div>

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
			<Link to={'about'} smooth={true} duration={300} offset={-20}>
				<Icon
					icon="eva:arrow-ios-back-fill"
					height="25"
					onClick={prevSlide}
					className="arrow left"
				/>
			</Link>
			<Link to={'about'} smooth={true} duration={300} offset={-20}>
				<Icon
					icon="eva:arrow-ios-forward-fill"
					height="25"
					onClick={nextSlide}
					className="arrow right"
				/>
			</Link>
		</StyledCarousel>
	);
};

export default Carousel;
