import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer';
import LogoNavLink from '../Buttons/LogoNavLink';

function SmallScreenNavbar(props) {
	const filterValues = [
		'About',
		'Congregations',
		'Get Involved',
		'Ministries',
		'Programs',
		'Resources',
	];
	const { window } = props;
	const container =
		window !== undefined ? () => window.document.body : undefined;
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => {
		setOpen((prevState) => !prevState);
	};
	return (
		<>
			<LogoNavLink />
			<IconButton
				color='inherit'
				aria-label='open-drawer'
				onClick={toggleDrawer}
				sx={{ position: 'fixed', top: 15, right: 30 }}>
				<MenuIcon fontSize='large' />
			</IconButton>
			<NavDrawer
				open={open}
				onClose={toggleDrawer}
				container={container}
				onClick={toggleDrawer}
				filter={filterValues}
			/>
		</>
	);
}
export default SmallScreenNavbar;
