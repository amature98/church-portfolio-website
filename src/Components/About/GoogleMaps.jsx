import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function GoogleMaps() {
	return (
		<>
			<Box
				sx={{ backgroundColor: (theme) => theme.palette.secondary.light, p: 8 }}>
				<Box sx={{ pb: 4, textAlign: 'center' }}>
					<Typography
						color='text.primary'
						variant='h3'
						gutterBottom>
						Locate your fellowship district
					</Typography>
					<Typography
						variant='body2'
						gutterBottom>
						Do you attend our any of our churches and would like to be part of our
						district fellowships but do not know which one you belong to? Use the map
						below to discover our district mapping and where you belong.
					</Typography>
				</Box>
				<Paper
					elevation={2}
					sx={{ height: '75vh', width: '90vw', mx: 'auto' }}>
					<iframe
						src="https://www.google.com/maps/d/embed?mid=1iHvGgTj1WTg-P9lzgC6mJQ-IVq3MHYY&ehbc=2E312F&noprof=1"
						title='Google Maps'
						width='100%'
						height='100%'
						loading='lazy'
						allow='fullscreen'></iframe>
				</Paper>
			</Box>
		</>
	);
}

export default GoogleMaps;
