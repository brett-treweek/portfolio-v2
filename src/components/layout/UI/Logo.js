import { NavLink } from 'react-router-dom';
import Smile from '../../../assets/Images/smile.png';
import styled from 'styled-components';

export const Logo = () => {
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

	return (
		<NavLink className="link" to="/" activeClassName="logo" exact>
			<LogoContainer>
				<Smileyface src={Smile} alt="" className="link" />
				Brett Treweek
			</LogoContainer>
		</NavLink>
	);
};
