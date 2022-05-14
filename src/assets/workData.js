import img1 from './Images/work/homepage02.webp';
import img2 from './Images/work/newPost.webp';
import img3 from './Images/work/stats2.webp';
import img4 from './Images/work/liamsSite.webp';
import img5 from './Images/work/weather.webp';
import img6 from './Images/work/insomnia.webp';

const workData = [
	{
		title: 'Round Report',
		subtitle: 'MERN stack web app with GraphQl and Google Maps API.',
		img: `${img1}`,
		alt: 'round report',
		link: 'https://round-report.herokuapp.com/',
		gitHub: 'https://github.com/brett-treweek/Round-Report',
		body: 'Designed to identify and communicate hazards for posties at Australia Post. Currently under further development in order to demo and trial at the request of Australia Post management. Personal Project',
	},
	{
		title: 'Tech Blog',
		subtitle: 'Fullstack Blogging Site.',
		img: `${img2}`,
		alt: 'tech blog',
		link: 'https://fullstack-tech-blog.herokuapp.com/',
		gitHub: 'https://github.com/brett-treweek',
		body: 'Blog site using Node.js backend, Express server, MySQL database, Handlebars templating, HTML, CSS and Javascript. Bootcamp Project.',
	},
	{
		title: 'Session Stats',
		subtitle: 'Discord bot to track game stats.',
		img: `${img3}`,
		alt: 'warzone stats discord bot',
		link: 'https://github.com/brett-treweek/friday-night-warzone-stats',
		gitHub: 'https://github.com/brett-treweek/friday-night-warzone-stats',
		body: 'Built in node.js with discord.js to provide realtime stats of Call of Duty Warzone games. Designed to give an overview of performance over the night/session. Rest API requests used to fetch game data. Personal Project.',
	},
	{
		title: 'Liams Landing',
		subtitle: 'Landing page for a friend.',
		img: `${img4}`,
		alt: 'liams landing page',
		link: 'https://ownahomewa.com',
		gitHub: 'https://github.com/brett-treweek/liams-website',
		body: 'This website was designed in Figma and built with React, using Styled Compnents, Material UI and Email.js. Personal Project.',
	},
	{
		title: 'Weather App',
		subtitle: 'Frontend website with REST API requests.',
		img: `${img5}`,
		alt: 'weather app',
		link: 'https://brett-treweek.github.io/Simple-Weather-App/',
		gitHub: 'https://github.com/brett-treweek/Simple-Weather-App',
		body: 'Built with HTML, CSS, Javascript. This web app makes API requests to get weather data and uses local storage to save search history. Bootcamp Project.',
	},
	{
		title: 'E-Commerce Backend',
		subtitle: 'E-Commerce Backend with CRUD functionality.',
		img: `${img6}`,
		alt: 'e-commerce back end',
		link: 'https://drive.google.com/file/d/1FCYHqZUdpDvJH5w-hsaiwWO633WRc6Pq/view',
		gitHub: 'https://github.com/brett-treweek/Easy-E-Commerce-Back-End',
		body: 'API built with Express.js, MySQL and Sequelize to query and interact with a database. Insomnia is used to test various requests. Bootcamp Project.',
	},
];

export default workData;
