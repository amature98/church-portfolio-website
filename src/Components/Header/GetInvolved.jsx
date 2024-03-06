import React, { useEffect } from 'react';
import {
	Box,
	Typography,
	Grid,
	useMediaQuery,
	useTheme,
	Button,
	Icon,
} from '@mui/material';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';
import gsap from 'gsap';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: ' 90px 32px ',
	},
}));

const gridItems = [
	{
		icon: <ChurchOutlinedIcon />,
		title: 'Church Gatherings',
		text: 'Join us as we gather at any of our churches.',
		buttontext: 'Plan a visit',
	},
	{
		icon: <HouseOutlinedIcon />,
		title: 'District Fellowships',
		text: 'Locate your small group to have easier and more intimate fellowship.',
		buttontext: 'Find your district',
	},
	{
		icon: <GroupsOutlinedIcon />,
		title: 'Church Groups',
		text: 'Find your small group to have easier and more intimate fellowship.',
		buttontext: 'Find a group',
	},
];

function GetInvolved() {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

	useEffect(() => {}, []);
	return (
		<Box
			className={classes.container}
			sx={{
				backgroundColor: (theme) => theme.palette.primary.main,
				color: (theme) => theme.palette.primary.light,
			}}>
			<Grid
				container
				spacing={6}
				flexDirection={isMobile ? 'column' : 'row'}>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={4}>
					<Box
						sx={{
							width: isMobile ? '90vw' : 'initial',
							margin: isMobile ? 'auto' : 'initial',
							textAlign: isMobile ? 'center' : '',
						}}>
						<Typography
							variant='h4'
							sx={{ mb: 4 }}>
							{' '}
							Ways to experience God's Love at Mukinyi
						</Typography>
						<Typography variant='body2'>
							{' '}
							There are several ways to participate in Mukinyi. Whatever your comfort
							level, there are opportunities for you to join in community and draw
							nearer to Jesus.
						</Typography>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
					lg={8}>
					<Grid
						container
						spacing={6}
						sx={{ width: isMobile ? '70vw' : '', margin: isMobile ? 'auto' : '' }}>
						{gridItems.map((item) => (
							<Grid
								key={item.title}
								item
								xs={12}
								sm={12}
								md={6}
								lg={6}>
								<Icon
									fontSize='large'
									sx={{
										color: (theme) => theme.palette.secondary.light,
									}}>
									{item.icon}
								</Icon>
								<Typography
									variant='h4'
									sx={{ py: 2 }}>
									{item.title}
								</Typography>
								<Typography
									variant='body2'
									sx={{ py: 2 }}>
									{item.text}
								</Typography>
								<Button
									endIcon={
										<AddIcon
											fontSize='large'
											color='secondary.light'
										/>
									}
									sx={{ my: 2, color: (theme) => theme.palette.primary.light }}>
									{item.buttontext}
								</Button>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

export default GetInvolved;
