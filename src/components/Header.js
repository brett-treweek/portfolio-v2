import { StyledHeader } from './styles/Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<div className='logo'>
				<h2>Brett Treweek</h2>
				<p>Web Developer</p>
			</div>
			<nav>
				<button>About</button>
				<button>Projects</button>
				<button>Resume</button>
				<button>Contact</button>
			</nav>
		</StyledHeader>
	);
};

export default Header;
