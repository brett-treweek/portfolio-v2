import img1 from './Images/about/about1.png';
import img2 from './Images/about/about2.png';
import img3 from './Images/about/about3.webp';


const aboutData = [
	{
		title: 'Current Focus',
		subTitle: 'Becoming a Developer',
		image: `${img1}`,
		alt: '',
		body1: 'All of my spare time is currently spent learning web development and levelling up. My goal is to become a developer.',
		body2: 'I love the problem solving and creative aspects of coding, and I enjoy the process of continuous learning. I wish I had discovered this passion sooner.',
		body3: 'Technologies of current focus include',
		bodyArray: [
			'Javascript',
			'HTML and CSS',
			'REACT',
			'Browser APIs',
			'HTTP',
			'Node.js',
			'Express',
			'SQL and noSQL databases',
			'Sequelize and Mongoose',
			'Rest and GraphQL APIs',
			'Apollo',
			'Google Cloud',
		],
	},
	{
		title: 'Work Experience',
		subTitle: 'Past and Present',
		image: `${img2}`,
		alt: '',
		body1: 'I am currently a postie and have worked at Australia Post for ten years. I have enjoyed my time with Post, working in both Melbourne and Perth.',
		body2: 'I have previously worked as a croupier at Crown Casino, and as a Cook in a busy Italian resturant in Fremantle.',
		body3: 'I studied Biology for two years at Murdoch University',
		body4: 'References are available upon request.',
	},
	{
		title: 'Passtimes',
		image: `${img3}`,
		alt: '',
		body1: 'I love to spend time with my family.',
		body2: '',
		body3: 'My hobbies and interests include',
		bodyArray: [
			'Web Development, coding and computers',
			'Reading science fiction and fantasy',
			'PC gaming',
			'Building and racing drones',
			'Travelling',
			'Cooking',
			'Snowboarding',
			'Tennis',
			'Hiking and Nature',
		],
	},
	// {
	// 	title: 'Favorite Colors',
	// 	image: `${img4}`,
	// 	alt: '',
	// 	body: 'I have varied experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione placeat odit nisi eius voluptas amet asperiores. Similique, ex ipsa repellendus voluptates quae doloremque quis doloribus fugit tempore accusamus! Alias.',
	// },
	// {
	// 	title: 'Passtimes',
	// 	image: `${img5}`,
	// 	alt: '',
	// 	body: 'I have varied experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione placeat odit nisi eius voluptas amet asperiores. Similique, ex ipsa repellendus voluptates quae doloremque quis doloribus fugit tempore accusamus! Alias.',
	// },
];

export default aboutData;
