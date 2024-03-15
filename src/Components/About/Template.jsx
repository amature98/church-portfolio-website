import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
} from '@mui/material';

function Template({
	churchName = '',
	text = '',
	image = '',
	cardHeader = '',
	cardTitle = '',
	serviceArray,
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
						<Typography
							gutterBottom
							variant='body2'>
							{text}
						</Typography>
						<Stack
							direction='row'
							spacing={4}
							sx={{ mt: 4 }}>
							<Button
								sx={{
									background: (theme) => theme.palette.secondary.light,
								}}>
								{' '}
								join our congregation
							</Button>
							<Button
								sx={{
									background: (theme) => theme.palette.secondary.light,
								}}>
								{' '}
								contribute
							</Button>
						</Stack>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={6}>
						<Card
							variant='outlined'
							sx={{ borderRadius: 3 }}>
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
			<Box
				sx={{
					p: 4,
					backgroundColor: (theme) => theme.palette.primary.main,
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						p:4
					}}>
					<Typography
						variant='h3'
						gutterBottom>
						Sunday Service Program
					</Typography>
					<Stack
						direction='row'
						divider={
							<Divider
								orientation='vertical'
								flexItem
								variant='middle'
								sx={{ opacity: 0.95, backgroundColor: 'text.light' }}
							/>
						}>
						{serviceArray.map((item, index) => (
							<Paper
								sx={{
									textAlign: 'center',
									px: 2,
									py: 2,
									backgroundColor: (theme) => theme.palette.primary.main,
								}}
								key={index}
								elevation={0}>
								<Typography
									gutterBottom
									variant='h6'
									color='text.light'>
									{item.title}
								</Typography>
								<Typography
									color='text.light'
									variant='body2'>
									{item.time}
								</Typography>
							</Paper>
						))}
					</Stack>
				</Box>
			</Box>
		</>
	);
}

export default Template;
