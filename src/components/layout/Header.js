import { StyledHeader } from '../styles/layoutStyles/Header.styled';
import {
	FlexContainer,
	StyledContainer,
	Card,
} from '../styles/UI/Container.styled';
import { BackgroundAccent } from '../styles/UI/Background.styled';
import portrait from '../../assets/brett_portrait.jpg';

const Header = (props) => {
	return (
		<StyledHeader>
			<BackgroundAccent right />
			<StyledContainer>
				<FlexContainer>
					<Card>
						<div>
							<span>hello there</span>
							<h1>im brett</h1>
						</div>

						<h3>Full Stack Web Developer</h3>
						<h4>(in development)</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Dolores minus illo consequuntur! Repudiandae
							culpa non fuga odio, quas quae suscipit dolorum
							libero magni soluta in minus atque voluptates
							aperiam perferendis amet animi, nostrum
							exercitationem, adipisci ut quidem earum? Facilis,
							reprehenderit.
						</p>
					</Card>
					<Card jc="center" ai="center">
						<img src={portrait} alt="" />
					</Card>
				</FlexContainer>
			</StyledContainer>
		</StyledHeader>
	);
};

export default Header;
