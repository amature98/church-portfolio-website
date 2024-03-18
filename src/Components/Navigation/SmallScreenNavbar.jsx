import React, { useState } from 'react';
import { Box, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer';

function SmallScreenNavbar(props) {
	const { window } = props;
	const container =
		window !== undefined ? () => window.document.body : undefined;
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen((prevState) => !prevState);
	};
	return (
		<>
			<Box>
				<img
					src=''
					alt='Logo'
				/>
			</Box>
			<IconButton
				color='inherit'
				size='large'
				aria-label='open-drawer'
				onClick={toggleDrawer}
				sx={{ position: 'fixed', top: 15, right: 30 }}>
				<MenuIcon />
			</IconButton>
			<NavDrawer
				open={open}
				onClose={toggleDrawer}
				container={container}
				onClick={toggleDrawer}></NavDrawer>
		</>
	);
}
export default SmallScreenNavbar;
