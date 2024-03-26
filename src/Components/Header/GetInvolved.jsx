import React, { useEffect, useRef, useState } from 'react';
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
import RemoveIcon from '@mui/icons-material/Remove';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

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
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const itemRef = useRef(null);
	const textRef = useRef(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => {
				const tl = gsap.timeline();
				tl.from(titleRef.current, {
					y: 200,
					opacity: 0,
					ease: 'power4.out',
					duration: 3,
				});
			},
			once: true,
		});
	}, [titleRef]);
	useEffect(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => {
				const tl = gsap.timeline({ delay: 1 });
				tl.from(textRef.current, {
					y: 200,
					opacity: 0,
					ease: 'power4.out',
					duration: 3,
				});
			},
			once: true,
		});
	}, [textRef]);
	useEffect(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => {
				const tl = gsap.timeline({ delay: 1 });
				tl.from(itemRef.current, {
					y: 200,
					opacity: 0,
					ease: 'power4.out',
					duration: 3,
				});
			},
			once: true,
		});
	}, [itemRef]);
	return (
		<Box
			ref={sectionRef}
			sx={{
				display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: ' 90px 32px ',
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
							ref={titleRef}
							variant='h4'
							sx={{ mb: 4 }}>
							{' '}
							Ways to experience God's Love at Mukinyi
						</Typography>
						<Typography
							ref={textRef}
							variant='body2'>
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
						ref={itemRef}
						container
						spacing={6}
						sx={{
							width: isMobile ? '80vw' : 'initial',
							margin: isMobile ? 'auto' : '',
						}}>
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
										isHovered ? (
											<RemoveIcon
												sx={{
													color: (theme) => theme.palette.secondary.light,
													fontSize: '40px',
												}}
											/>
										) : (
											<AddIcon
												sx={{
													color: (theme) => theme.palette.secondary.light,
													fontSize: '40px',
												}}
											/>
										)
									}
									onMouseEnter={() => setIsHovered(true)}
									onMouseLeave={() => setIsHovered(false)}
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
