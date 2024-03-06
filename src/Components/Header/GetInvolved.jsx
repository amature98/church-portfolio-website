import React, { useEffect } from 'react';
import {
	Box,
	Typography,
	Grid,
	useMediaQuery,
	useTheme,
	Button,
} from '@mui/material';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
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
	title: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
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
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
					sm={6}
					md={4}
					lg={4}>
					<Box sx={{}}>
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
					md={8}
					lg={8}>
					<Grid
						container
						spacing={6}>
						{gridItems.map((item) => (
							<Grid
								item
								xs={12}
								sm={12}
								md={6}
								lg={6}>
								{item.icon}
								{/* <ChurchOutlinedIcon
									sx={{
										fontSize: '40px',
										color: (theme) => theme.palette.secondary.light,
									}}
								/> */}
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
								<Button sx={{ my: 2, color: (theme) => theme.palette.primary.light }}>
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
