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
}) {
	// Get current location using react-router-dom's useLocation hook
	const { pathname } = useLocation();

	// Function to check if a path matches the current location
	const match = (path) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;

	// Function to filter NavLinks based on NavTitles
	const mapLinksByFilter = () => {
		// Create an object to store links mapped by their titles
		const linksByTitle = {};

		// Group links by their corresponding title
		navTitles.forEach((navTitle) => {
			const { title } = navTitle;

			// Filter the NavLinks array to include only links matching the current NavTitle
			const filteredLinks = navLinks.filter((link) => link.filter === title);

			// Store the filtered links in the linksByTitle object
			linksByTitle[title] = filteredLinks;
		});

		// Convert the linksByTitle object to an array of objects containing title and links properties
		return Object.entries(linksByTitle).map(([title, links]) => ({
			title,
			links,
		}));
	};

	// Call the function to get the mapped links
	const links = mapLinksByFilter();

	// JSX for the drawer content
	const drawer = (
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
	);

	// JSX for the drawer component
	return (
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
	);
}

export default NavDrawer;
