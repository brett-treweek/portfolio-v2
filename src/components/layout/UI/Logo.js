import Smile from '../../../assets/Images/smile.png';
import styled from 'styled-components';


const Smileyface = styled.img`
	height: 27px;
	width: 27px;
	margin-right: 6px;
	color: black;
	filter: ${(props) => props.theme.filter};
`;

const LogoContainer = styled.div`
	font-family: 'Satisfy', cursive;
	font-size: 1.3rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const Logo = () => {
	return (
		<LogoContainer>
			<Smileyface src={Smile} alt="" className="link" />
			Brett Treweek
		</LogoContainer>
	);
};
