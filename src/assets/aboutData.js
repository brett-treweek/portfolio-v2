import img1 from './Images/about/about1.webp';
import img2 from './Images/about/about2.webp';
import img3 from './Images/about/about3.webp';


const aboutData = [
	{
		title: 'Current Focus',
		subTitle: 'Becoming a Developer',
		image: `${img1}`,
		alt: 'collage of code',
		body1: 'Most of my spare time is currently spent learning Javascript and Web Development. My goal is to work as a Developer.',
		body2: 'I love the problem solving and creative aspects of coding, and I enjoy the process of continuous learning.',
		body3: 'Technologies I am currently focused on include:',
		bodyArray: [
			'Javascript',
			'REACT',
			'Styled Components',
			'Framer Motion and MUI',
			'Rest and GraphQL APIs',
			'Node.js',
			'Express.js',
			'Discord.js',
			'SQL and noSQL databases',
			'Sequelize and Mongoose',
		],
	},
	{
		title: 'Work Experience',
		subTitle: 'Past and Present',
		image: `${img2}`,
		alt: 'collage of work experience',
		body1: 'I am currently a Postie and have worked at Australia Post for ten years. My time with Post has been enjoyable, working in both Melbourne and Perth.',
		body2: 'I have previously worked as a croupier at Crown Casino, and as a Cook in an Italian resturant in Fremantle.',
		body3: 'I studied Biology for two years at Murdoch University.',
		body4: 'References are available upon request.',
	},
	{
		title: 'Passtimes',
		image: `${img3}`,
		alt: 'collage of brett',
		subTitle: 'My hobbies and interests include:',
		bodyArray: [
			'Having fun with the family.',
			'Web Development, coding and computers.',
			'Reading Science Fiction and Fantasy novels.',
			'Call of Duty Warzone.',
			'Building and flying FPV drones.',
			'Travelling.',
			'Cooking.',
			'Tennis.',
			'Formula One.'
		],
	}
];

export default aboutData;
