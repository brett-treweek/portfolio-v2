import { StyledHeader } from '../styles/layoutStyles/Header.styled';
import {
	FlexContainer,
	Card,
	Section,
} from '../styles/UIStyles/Container.styled';
import { BackgroundAccent } from '../styles/UIStyles/Background.styled';
import portrait from '../../assets/brett_portrait.jpg';

const Header = (props) => {
	return (
		<StyledHeader>
			<BackgroundAccent right />
			<Section>
				<FlexContainer ai='center' jc='space-evenly'>
					<Card>
						<div>
							<span>hello there</span>
							<h1>im brett</h1>
						</div>

						<h3>Full Stack Web Developer</h3>
						<h4>(in development)</h4>
						<p>
							I have just completed a certificate in web development with the University of Western Australia. I am excited and highly motivated to turn my hobby into my new career. Please check out my work and get in touch.
						</p>
					</Card>
					<Card jc="center" ai="center">
						<img src={'./Images/img6.jpg'} alt="" />
					</Card>
				</FlexContainer>
			</Section>
		</StyledHeader>
	);
};

export default Header;
