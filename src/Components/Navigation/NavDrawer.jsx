import React from 'react';
import {
	Box,
	Button,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItemButton,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { navTitles, navLinks} from './NavLinks';

function NavDrawer({
	anchor = 'right',
	container,
	variant = 'temporary',
	open,
	onClose,
	onClick,
}) {
	const drawer = (
		<>
			<Box>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='flex-start'
					sx={{ borderBottom: '0.1px solid #f7f7f7', mb: '30px', pb: '10px' }}>
					<Button href='/'>
						<img
							src=''
							alt='logo'
						/>
					</Button>
					<IconButton
						color='inherit'
						aria-label='close'
						onClick={onClick}>
						<CloseIcon sx={{ fontSize: 32 }} />
					</IconButton>
				</Stack>
				<Box sx={{ flexGrow: 1 }}>
					<Grid
						container
						spacing={2}>
						{navTitles.map((navTitle, index) => (
							<Grid
								item
								xs={4}
								key={index}>
								<Typography variant='h6'> {navTitle.title} </Typography>
								<List>
									{navLinks.slice(index * 4, (index + 1) * 4).map((navLink, i) => (
										<ListItemButton key={i}>
											<ListItemText primary={navLink.title} />
										</ListItemButton>
									))}
								</List>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</>
	);
	return (
		<>
			<Drawer
				anchor={anchor}
				container={container}
				variant={variant}
				open={open}
				onClose={onClose}
				sx={{
					'& .MuiDrawer-paper': {
						backgroundColor: (theme) => theme.palette.primary.main,
						color: (theme) => theme.palette.text.light,
						width: '100vw',
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						paddingX: 8,
						paddingY: 4,
					},
				}}>
				{drawer}
			</Drawer>
		</>
	);
}

export default NavDrawer;
