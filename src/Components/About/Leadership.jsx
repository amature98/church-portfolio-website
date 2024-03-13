import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react';
import Image1 from '../../Images/rev.jpg'
import Image2 from '../../Images/elder1.jpg'
import Image3 from '../../Images/elder2.jpg'
import Image4 from '../../Images/elder3.jpg'

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

function Leadership() {
	return (
		<>
			<Box sx={{ p: 4 }}>
				<Typography
					gutterBottom
					variant='h3'
					color='text.primary'>
					Kirk Session - the Mukinyi Leadership
				</Typography>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					spacing={2}>
					{Leaders.map((leader, index) => (
						<Grid
							item
							xs={6}
							md={4}
							lg={2}
							key={index}>
							<Card
								elevation={12}
								sx={{ borderRadius: 3, maxWidth: 360 }}>
								<CardMedia
									sx={{ height: '30vh' }}
									component='img'
									image={leader.image}
									alt={leader.name}
								/>
								<CardContent>
									<Typography
										variant='h6'
										gutterBottom>
										{' '}
										{leader.name}{' '}
									</Typography>
									<Typography
										variant='body2'
										gutterBottom>
										{leader.title}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}

export default Leadership;
