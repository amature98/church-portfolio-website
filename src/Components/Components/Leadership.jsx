import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';

function Leadership({ title='', leadersArray, textAlign = 'start' }) {
	return (
		<>
			<Box
				id='Leadership'
				sx={{ p: 4 }}>
				<Typography
					gutterBottom
					variant='h3'
					color='text.primary'
					sx={{ textAlign: textAlign }}>
					{title}
				</Typography>
				<Grid
					container
					justifyContent='center'
					alignItems='center'
					spacing={4}
					sx={{ my: 4 }}>
					{leadersArray.map((leader, index) => (
						<Grid
							item
							xs={6}
							md={4}
							lg={3}
							key={index}>
							<Card
								raised
								sx={{ borderRadius: 3, width: '100%' }}>
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
										{leader.name}
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
