import { useState } from 'react';
import { Snackbar, Alert, Box, TextField, Button, Slide } from '@mui/material';
import {
	StyledContact,
	StyledForm,
} from '../../styles/layoutStyles/Contact.styled';
import { Card, FlexContainer } from '../../styles/UIStyles/UiStyles';
// import emailjs from 'emailjs-com';

const Contact = () => {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const sendEmail = (event) => {
		event.preventDefault();
		setOpen(true);
		// emailjs
		// 	.sendForm(
		// 		'service_r1o1bg2',
		// 		'template_lff938p',
		// 		event.target,
		// 		'user_EUQIT1kNZJfWl6ouFWojf'
		// 	)
		// 	.then(
		// 		(result) => {
		// 			setOpen(true);
		// 			console.log(result.text);
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);
		event.target.reset();

		console.log('you sucssefully submited email');
	};

	return (
		<StyledContact>
			<StyledForm id="contactForm">
				<h1>Lets Get In Touch!</h1>
				<FlexContainer>
					<Card height="100%" className="contact-card">
						<h2>Brett Treweek</h2>
						<h3>Perth, Western Australia</h3>
						<h3>0401 043 178</h3>
						<p>bretttrew@gmail.com</p>
						<p>Github</p>
						<p>Linkedin</p>
					</Card>
					<Box component="form" Validate onSubmit={sendEmail} sx={{}}>
						<TextField
							name="name"
							className="textField"
							label="Name"
							variant="filled"
							fullWidth
							required
						/>
						<TextField
							name="email"
							className="textField"
							label="Email"
							variant="filled"
							fullWidth
							required
							type="email"
						/>
						<TextField
							name="phone"
							className="textField"
							label="Phone Number"
							variant="filled"
							fullWidth
							type="text"
						/>
						<TextField
							name="message"
							className="textField"
							label="Message"
							variant="filled"
							rows={10}
							multiline
							fullWidth
						/>

						<Button
							id="btn"
							className="textField"
							type="submit"
							variant="contained"
							size="large"
							fullWidth
						>
							Submit
						</Button>
					</Box>
				</FlexContainer>

				<Snackbar
					open={open}
					onClose={handleClose}
					transitionDuration={800}
					variant="filled"
					autoHideDuration={4000}
					TransitionComponent={Slide}
					anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
				>
					<Slide direction="up">
						<Alert
							id="alert"
							variant="outlined"
							severity="success"
							onClose={handleClose}
						>
							Email Sent - Ill get back to you soon!
						</Alert>
					</Slide>
				</Snackbar>
			</StyledForm>
		</StyledContact>
	);
};

export default Contact;
