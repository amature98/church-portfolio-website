import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function LogoNavLink() {
	return (
		<>
			<Button
				component={Link}
				to='/'>
				<img
					src={''}
					alt='logo'
					style={{ height: 'auto' }}
				/>
			</Button>
		</>
	);
}

export default LogoNavLink;
