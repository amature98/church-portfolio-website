// Import required components
import React from 'react';
import { Container } from '@mui/material';
// Import needed pages
import Page from './Page';
import Header from '../Components/Header/index';
import Text from '../Components/About/Text';
import Leadership from '../Components/About/Leadership';
import BgImage from '../Images/cross.jpg';
// Import Images
import Image1 from '../Images/rev.jpg';
import Image2 from '../Images/elder1.jpg';
import Image3 from '../Images/elder2.jpg';
import Image4 from '../Images/elder3.jpg';

const Leaders = [
	{
		name: 'Rev. Emmanuel Nkoitiko',
		title: 'Session Moderator',
		image: Image1,
	},
	{
		name: 'Elder Caroline Gichuki',
		title: 'Session Clerk',
		image: Image2,
	},
	{
		name: 'Elder David Muiruri',
		title: 'Session Co-Clerk',
		image: Image3,
	},
	{
		name: 'Elder Grace Benson',
		title: 'Finance Chair',
		image: Image4,
	},
	{
		name: 'Elder Simon Kigotho',
		title: 'Parish Treasurer',
		image: Image2,
	},
	{
		name: 'Elder John Kihumba',
		image: Image3,
	},
	{
		name: 'Elder Zachariah Kori',
		image: Image2,
	},
	{
		name: 'Elder David Mwangi',
		image: Image3,
	},
];

function About() {
	return (
		<>
			<Page title='About - PCEA MUKINYI PARISH'>
				<Header
					height='70vh'
					title='Who are we?'
					headerText='Get to know us a little bit further'
					textAlign='center'
					bgimage={BgImage}
				/>
				<Container
					maxWidth='none'
					sx={{ width: '95vw', mx: 'auto', my: 6 }}>
					<Text />
					<Leadership
						leadersArray={Leaders}
						title='Kirk Session - the Mukinyi Leadership'
					/>
				</Container>
			</Page>
		</>
	);
}

export default About;
