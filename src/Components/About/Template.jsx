import React from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

function Template({
	churchName = '',
	text = '',
	image = '',
	cardHeader = '',
	cardTitle = '',
}) {
	return (
		<>
			<Box sx={{ width: '80vw', mx: 'auto', my: 8 }}>
				<Grid
					container
					sx={{ flexGrow: 1 }}
					spacing={4}>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}>
						<Typography
							gutterBottom
							variant='h3'
							color='text.primary'>
							Welcome to {churchName}
						</Typography>
						<Typography variant='body2'>{text}</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}>
						<Card sx={{ flexGrow: 1, zIndex: 1, borderRadius: 3 }}>
							<CardMedia
								component='img'
								image={image}
								alt='Image'
								sx={{ height: '50vh' }}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h3'
									color='text.primary'
									component='div'>
									{cardHeader}
								</Typography>
								<Typography
									gutterBottom
									variant='body2'
									component='div'>
									{cardTitle}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Box sx={{ p: 4, backgroundColor: (theme) => theme.palette.primary.main }}>
				<Typography
					variant='h3'
					gutterBottom>
					Sunday Service Program
				</Typography>
			</Box>
		</>
	);
}

export default Template;
