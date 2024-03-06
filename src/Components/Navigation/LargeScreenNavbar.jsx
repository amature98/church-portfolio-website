import React, { useState } from 'react';
import navLinks from './NavLinks';
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
					{navLinks.slice(0, 5).map((link) => (
						<Button
							key={link.title}
							component={Link}
							to={link.path}>
							{link.title}
						</Button>
					))}
					<IconButton
						color='default'
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
