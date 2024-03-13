import React from 'react';
import Header from '../Header/index.jsx';
import Page from '../../Pages/Page.jsx';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

function Template({
	churchName = '',
	text = '',
	image = '',
	cardHeader = '',
	cardTitle = '',
}) {
	return (
		<>
			<Page title='Church - PCEA MIKUINYI PARISH'>
				<Header
					title={`Welcome to ${churchName}`}
					headerText='We are glad you are here'
					height='100vh'
				/>
				<Box sx={{width:'90vw', margin: 'auto'}}>
					<Grid
						container
						sx={{ flexGrow: 1 }}
						spacing={6}>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}>
							<Typography variant='h3'>Welcome to {churchName}</Typography>
							<Typography variant='body2'>{text}</Typography>
						</Grid>
						<Grid
							item
							xs={12}
							md={6}
							lg={6}>
							<Card sx={{ flexGrow: 1, zIndex: 1 }}>
								<CardMedia
									component='img'
									image={image}
									alt='Image'
									sx={{ height: 'auto' }}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h3'
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
                <Box sx={{width: '90vw', margin: 'auto', backgroundColor: (theme) => theme.palette.secondary.light}}>
                    <Typography variant='h3' gutterBottom>
						
                    </Typography>
                </Box>
			</Page>
		</>
	);
}

export default Template;
