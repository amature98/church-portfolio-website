import React from 'react';
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	List,
	Stack,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { navTitles, navLinks } from './NavLinks';
import { matchPath, useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import LogoNavLink from '../Buttons/LogoNavLink';

function NavDrawer({
	anchor = 'right',
	container,
	variant = 'temporary',
	open,
	onClose,
	onClick,
	filter={},
}) {
	// Function to filter and mapthe links based on the filter prop
	const mapLinksByFilter = () => {
		// Convert filter prop to an array if its not already
		const filters = Array.isArray(filter) ? filter : [filter]
		// Filter the navLinks array based on filter prop
		const filteredLinks = navLinks.filter((link) => filters.includes(link.filter));
		// Map the filtered links to their coresponding titles from navTitles array
		return filteredLinks.map((link) => {
			const titleObj = navTitles.find((title) => title.title === link.filter);
			return {
				//Use the title from navTitles array or empty string if not found
				title: titleObj ? titleObj.title : '',
				links: filteredLinks, //include the filterd link
			};
		});
	};

	// Call the function to get the mapped links
	const links = mapLinksByFilter();

	const { pathname } = useLocation();
	const match = (path) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;
	const drawer = (
		<>
			<Box>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='flex-start'
					sx={{ borderBottom: '0.1px solid #f7f7f7', mb: '30px', pb: '10px' }}>
					<LogoNavLink />
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
						{links.map((group, index) => (
							<Grid
								item
								xs={4}
								key={index}>
								<Typography variant='h6'> {group.title} </Typography>
								<List>
									{group.links.map((link, index) => (
										<NavItem
											key={index}
											item={link}
											active={match}
										/>
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
						padding: 4,
					},
				}}>
				{drawer}
			</Drawer>
		</>
	);
}

export default NavDrawer;
