import Smile from '../../../assets/Images/smile.png';
import styled from 'styled-components';

const Smileyface = styled.img`
	height: 20px;
	width: 20px;
	margin-right: 6px;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
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
