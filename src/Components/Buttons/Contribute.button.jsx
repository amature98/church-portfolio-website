import React from 'react';
import { Button } from '@mui/material';

function ContributeBtn() {
	return (
		<>
			<Button
				sx={{
					background: (theme) => theme.palette.secondary.light,
					paddingX: 2,
				}}>
				{' '}
				contribute
			</Button>
		</>
	);
}

export default ContributeBtn;
