import img1 from './Images/about/about1.png';
import img2 from './Images/about/about2.png';
import img3 from './Images/about/about3.png';
import img4 from './Images/about/about4.png';
import img5 from './Images/about/about5.png';

const aboutData = [
	{
		title: 'Current Focus',
		subTitle: 'Becoming a Developer',
		image: `${img1}`,
		alt: '',
		body1: 'All of my spare time is currently spent learning web development and levelling up. My goal is to become a developer.',
		body2: 'I love the problem solving and creative aspects of coding, and I enjoy the process of continuous learning. I wish I had discovered this passion sooner.',
		body3: 'Technologies of current focus include:',
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
		body1: 'I am currently a postie and have worked at Australia Post for ten years. I have enjoyed my time with post, delivering the mail in both Melbourne and Perth.',
		body2: 'I have previously worked as a croupier at Crown Casino, and as a Cook at a busy Italian resturant in Fremantle.',
		body3: 'I studied Biology for two years at Murdoch University - If only I had enrolled in computer science...',
		body4: 'References are available upon request.',
	},
	{
		title: 'Hobbies and Passtimes',
		image: `${img3}`,
		alt: '',
		body1: 'I am a new father so I love to spend time with my fiancee and daughter.',
		body2: 'My hobbies and interests include:',
		body3: '',
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
