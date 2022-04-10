import { StyledHeader } from '../styles/layoutStyles/Header.styled';
import { StyledMainContainer } from '../styles/helperStyles/MainContainer.styled';
import { BackgroundAccent } from '../styles/helperStyles/BackgroundAccent.styled';
import { HeadingAccent } from '../styles/helperStyles/HeadingAccent.styled';
import { Title } from '../styles/helperStyles/Title.styled';



const Header = (props) => {

	const variants = {
		start: { left: '-39vw' },
		end: { left: '0vh' },
	};

	return (
		<StyledHeader>
			<StyledMainContainer>
				{/* <BackgroundAccent right /> */}
				<HeadingAccent
					left
					variants={variants}
					initial="start"
					animate="end"
					transition={{
						ease: 'easeOut',
						duration: 1.5,
						delay: 0,
					}}
				>
					<Title
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{
							ease: 'easeIn',
							duration: 0.5,
							delay: 1,
						}}
					><span className='hello'>hello there</span>
						im brett
					</Title>
				</HeadingAccent>
			</StyledMainContainer>
		</StyledHeader>
	);
};

export default Header;
