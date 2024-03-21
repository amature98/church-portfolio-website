import React from 'react';
import { Button } from '@mui/material';

function JoinChurch() {
	return (
		<>
			<Button
				sx={{
					background: (theme) => theme.palette.secondary.light,
					paddingX: 2
				}}>
				join us today
			</Button>
		</>
	);
}

export default JoinChurch;
