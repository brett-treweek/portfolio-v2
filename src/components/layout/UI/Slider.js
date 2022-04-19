import { Card, StyledSlider } from '../../styles/UIStyles/Container.styled';
import aboutData from '../../../assets/aboutData.json';
import { useState } from 'react';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)


	return <Card>
        {aboutData.map((slide, index) => {
            return (
                <StyledSlider
                key={slide.id}
                className={slideIndex === index + 1 ? 'slide active' : 'slide'}
                >
                    <img
                        src={`/Images/img${index + 1}.jpg`}
                        alt= ''
                    />
                </StyledSlider>
            )
        })}

    </Card>
};
