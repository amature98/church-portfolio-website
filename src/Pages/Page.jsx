import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/Navigation/NavBar';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

function Page({ children, title = '' }) {
	return (
		<>
			<Box>
				<Helmet>
					{' '}
					<title> {title} </title>{' '}
				</Helmet>
				<NavBar />
				{children}
			</Box>
		</>
	);
}
Page.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};
export default Page;
