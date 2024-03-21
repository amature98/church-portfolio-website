import React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha, useTheme, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LinkButton = styled(Button)(({ theme }) => ({
	marginRight: 4,
	color: theme.palette.primary.light,
	':hover': {
		backgroundColor: alpha(
			theme.palette.secondary.light,
			theme.palette.action.selectedOpacity,
		),
	},
}));

function NavLinkButton({ active, item }) {
	const { title, path } = item;
	const isActive = active(item.path);
	const theme = useTheme();
	const activeNavLinkStyle = {
		color: 'primary.light',
		backgroundColor: alpha(
			theme.palette.secondary.light,
			theme.palette.action.selectedOpacity,
		),
	};
	return (
		<>
			<LinkButton
				component={Link}
				to={path}
				sx={{ ...(isActive && activeNavLinkStyle) }}>
				{title}
			</LinkButton>
		</>
	);
}

NavLinkButton.propTypes = {
	item: PropTypes.object.isRequired,
	active: PropTypes.func,
};

export default NavLinkButton;
