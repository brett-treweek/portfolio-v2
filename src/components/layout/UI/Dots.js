import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledDots = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.dot {
		transform: translateX(-100%);
		padding: 6px;
		margin: 20px;
		border-radius: 100%;
		background-color: ${(props) =>
			props.highlight ? props.theme.highlight : props.theme.text};
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			background-color: ${(props) => props.theme.main};
		}
	}

	.active {
		background-color: ${(props) => props.theme.highlight};
	}
`;

const Dots = ({ data, dotClick, active }) => {

	return (
		<StyledDots>
			{data.map((item, index) => (
				<Link
					to={'about'}
					smooth={true}
					duration={300}
					offset={-20}
					className={active === index ? 'active dot' : 'dot'}
					key={index}
					onClick={() => dotClick(index)}
				></Link>
			))}
		</StyledDots>
	);
};

export default Dots;
