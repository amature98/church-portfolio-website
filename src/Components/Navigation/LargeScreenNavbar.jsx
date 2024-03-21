import React, { useState } from 'react';
// Import Links array
import { largeScreenLinks } from './NavLinks';
// Import react-router-dom functions
import { matchPath, useLocation } from 'react-router-dom';
// Importing MUI Commponents
import { Box, IconButton } from '@mui/material';
// Import Customised Component
import NavLinkButton from '../Buttons/NavLinkButton';
import NavDrawer from './NavDrawer';
// Import Icon
import MenuIcon from '@mui/icons-material/Menu';
import LogoNavLink from '../Buttons/LogoNavLink';

function LargeScreenNavbar({ window }) {
	const container =
		window !== undefined ? () => window.document.body : undefined;
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => setOpen((prevState) => !prevState);
	const { pathname } = useLocation();
	const active = (path) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<LogoNavLink />
			<Box>
				{largeScreenLinks.map((link) => (
					<NavLinkButton
						key={link.title}
						item={link}
						active={active}
					/>
				))}
			</Box>
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
	);
}
export default LargeScreenNavbar;
