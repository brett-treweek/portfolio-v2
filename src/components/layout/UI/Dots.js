import { Dot, StyledDots } from '../../styles/layoutStyles/About.styled';

const Dots = ({ data, dotClick, active }) => (
	<StyledDots>
		{data.map((item, index) => (
			<Dot key={index} onClick={() => dotClick(index)} active={active === index ? true : false} />
		))}
	</StyledDots>
);

export default Dots;
