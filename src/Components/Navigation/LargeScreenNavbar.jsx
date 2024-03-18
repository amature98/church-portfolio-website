import React, { useState } from 'react';
import { largeScreenLinks } from './NavLinks';
import { Box, Button, IconButton, Link } from '@mui/material';
import NavDrawer from './NavDrawer';
import MenuIcon from '@mui/icons-material/Menu';

function LargeScreenNavbar(props) {
	const { window } = props;
	const container =
		window !== undefined ? () => window.document.body : undefined;
	const [open, setOpen] = useState(false);
	function toggleDrawer() {
		setOpen((prevState) => !prevState);
	}
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<Button
					component={Link}
					to='/'>
					<img
						src={''}
						alt='logo'
						style={{ height: 'auto' }}
					/>
				</Button>
				<Box>
					{largeScreenLinks.map((link, index) => (
						<Button
							key={index}
							component={Link}
							to={link.path}
							sx={{ color: (theme) => theme.palette.primary.light }}>
							{link.title}
						</Button>
					))}
					<IconButton
						color='inherit'
						size='large'
						aria-label='togglebtn'
						onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
					<NavDrawer
						open={open}
						onClose={toggleDrawer}
						container={container}
						onClick={toggleDrawer}
					/>
				</Box>
			</Box>
		</>
	);
}

export default LargeScreenNavbar;
