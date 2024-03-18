import React, { cloneElement } from 'react';
import SmallScreenNavbar from './SmallScreenNavbar.jsx';
import LargeScreenNavbar from './LargeScreenNavbar.jsx';
import {
	AppBar,
	Container,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Custom function to render elevation on scrolling the navbar with effect
function ElevationScroll({ children, window }) {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});
	return cloneElement(children, {
		elevation: trigger ? 12 : 0,
		style: {
			backgroundColor: trigger ? '#004c6d' : 'transparent',
		},
	});
}
ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};
// Default function to render the navigation bar
function Navbar(props) {
	// Instatiate the useTheme method
	const theme = useTheme();
	// Define small media queries
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<>
			<ElevationScroll {...props}>
				<AppBar>
					<Toolbar>
						<Container maxWidth='false'>
							{isSmallScreen ? <SmallScreenNavbar /> : <LargeScreenNavbar />}
						</Container>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</>
	);
}

export default Navbar;
