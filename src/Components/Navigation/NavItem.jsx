import React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import {
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

// Function to create a custom styled nav item
const StyledNavItem = styled(ListItemButton)(({ theme }) => ({
	textAlign: 'center',
	':hover': {
		backgroundColor: alpha(theme.palette.action.hover, 0.9),
	},
}));
// Default function that renders the nav-items
function NavItem({ item }) {
	const { title, path } = item;
	return (
		<ListItem>
			<StyledNavItem
				component={Link}
				to={path}>
				<ListItemText>
					<Typography
						variant='body2'
						sx={{ color: '#f7f7f7' }}>
						{title}
					</Typography>
				</ListItemText>
			</StyledNavItem>
		</ListItem>
	);
}
NavItem.propTypes = {
	item: PropTypes.object,
};

export default NavItem;
