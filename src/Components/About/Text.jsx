import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';

function Text() {
	return (
		<>
			<Box>
				<Card
					elevation={6}
					sx={{
						mb: 4,
						p: 4,
						backgroundColor: '#FFCFD2',
						borderRadius: 3,
					}}>
					<Typography
						variant='h4'
						gutterBottom>
						Brief History
					</Typography>
					<Typography
						variant='body2'
						gutterBottom>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla
						cupiditate blanditiis! Similique, repudiandae. Illum quia dolorem,
						voluptatibus tenetur commodi dolores consectetur nihil reprehenderit
						eveniet unde adipisci ab accusantium vel molestiae eum culpa laboriosam
						obcaecati distinctio sapiente. Molestias eaque atque asperiores laborum
						inventore, eveniet, modi obcaecati eligendi sint fugit quos nemo similique
						illum aliquid commodi tempora quae deleniti, neque maiores totam. Quod
						quam nobis beatae dolorum reiciendis cumque, doloribus dignissimos nemo
						error soluta! Quidem vel amet neque repellendus molestiae labore
						praesentium officia recusandae quod, nemo, similique libero. Ex quos
						corporis amet nihil non ratione voluptas laborum quasi ut adipisci
						nesciunt minus, cupiditate aliquid officia inventore ab? Quasi, eaque
						nobis. Cum consequatur quasi, laboriosam a autem accusamus quos
						consequuntur vero quidem soluta sapiente in, tenetur, esse dicta dolorum
						et.
					</Typography>
				</Card>
				<Card
					elevation={6}
					sx={{
						mb: 4,
						p: 4,
						backgroundColor: '#AED9EA',
						borderRadius: 3,
					}}>
					<Typography
						gutterBottom
						variant='h4'>
						Congregations
					</Typography>
					<Typography
						gutterBottom
						variant='body2'>
						PCEA Mukinyi Parish is a one church congregation in the Presbytery of
						Nairobi North which is made up of 17 parishes under PCEA Head Office. The
						church is made up 4 congregations: PCEA Mukinyi Church (the Parish
						Headquarters), PCEA Neema Church, PCEA Blessed Hope Church (BHC), PCEA
						Highway Church.
					</Typography>
				</Card>
				<Card
					elevation={6}
					sx={{
						mb: 4,
						p: 4,
						backgroundColor: '#FFD670',
						borderRadius: 3,
					}}>
					<Grid
						container
						spacing={6}>
						<Grid
							item
							xs={4}>
							<Typography
								gutterBottom
								variant='h6'>
								Mission
							</Typography>
							<Typography
								gutterBottom
								variant='body2'>
								{' '}
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</Typography>
						</Grid>
						<Grid
							item
							xs={4}>
							<Typography
								gutterBottom
								variant='h6'>
								Vision
							</Typography>
							<Typography
								gutterBottom
								variant='body2'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</Typography>
						</Grid>
						<Grid
							item
							xs={4}>
							<Typography
								gutterBottom
								variant='h6'>
								Motto
							</Typography>
							<Typography
								gutterBottom
								variant='body2'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</Box>
		</>
	);
}

export default Text;
