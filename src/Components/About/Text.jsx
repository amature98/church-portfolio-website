import { Box, Typography } from '@mui/material';
import React from 'react';

function Text() {
	return (
		<>
			<Box
				sx={{
					m: 4,
					p: 4,
					borderTopRadius: 16,
					backgroundColor: '#FFCFD2',
				}}>
				<Typography variant='h4'>Brief History</Typography>
				<Typography variant='body2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla
					cupiditate blanditiis! Similique, repudiandae. Illum quia dolorem,
					voluptatibus tenetur commodi dolores consectetur nihil reprehenderit
					eveniet unde adipisci ab accusantium vel molestiae eum culpa laboriosam
					obcaecati distinctio sapiente. Molestias eaque atque asperiores laborum
					inventore, eveniet, modi obcaecati eligendi sint fugit quos nemo similique
					illum aliquid commodi tempora quae deleniti, neque maiores totam. Quod quam
					nobis beatae dolorum reiciendis cumque, doloribus dignissimos nemo error
					soluta! Quidem vel amet neque repellendus molestiae labore praesentium
					officia recusandae quod, nemo, similique libero. Ex quos corporis amet
					nihil non ratione voluptas laborum quasi ut adipisci nesciunt minus,
					cupiditate aliquid officia inventore ab? Quasi, eaque nobis. Cum
					consequatur quasi, laboriosam a autem accusamus quos consequuntur vero
					quidem soluta sapiente in, tenetur, esse dicta dolorum et.
				</Typography>
			</Box>
			<Box
				sx={{
					ml: 32,
					p: 4,
					borderBottomLeftRadius: 16,
					backgroundColor: '#AED9EA',
				}}>
				<Typography variant='h4'>Congregations</Typography>
			</Box>
		</>
	);
}

export default Text;
