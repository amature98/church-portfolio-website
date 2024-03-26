import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import church1 from '../../Images/church1.jpg';
import church2 from '../../Images/church2.jpg';
import church3 from '../../Images/church3.jpg';
import church4 from '../../Images/church4.jpg';
import { ScrollTrigger } from 'gsap/all';

const Item = styled(Card)(({ theme }) => ({
	textAlign: 'center',
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: theme.palette.common.white,
	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background:
			'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)',
		zIndex: 1,
	},
}));

const StyledCardContent = styled(CardContent)(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	zIndex: 2,
}));

const CardList = [
	{ title: 'Mukinyi Church', image: church1, link: '/mukinyi-church' },
	{ title: 'Neema Church', image: church2, link: '/neema-church' },
	{ title: 'Blessed Hope Church', image: church3, link: '/blessed-hope-church' },
	{ title: 'Highway Church', image: church4, link: '/highway-church' },
];

gsap.registerPlugin(ScrollTrigger);

function LocationsSections({ title, subtitle, ...props }) {
	const titleRef = useRef(null);
	const subtitleRef = useRef(null);
	const sectionRef = useRef(null);
	useEffect(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => {
				const tl = gsap.timeline({ delay: 1.0 });
				tl
					.from([titleRef.current,subtitleRef.current], {
						y: 200,
						opacity: 0,
						ease: 'power4.out',
						duration: 3,
						stagger: 0.2
					})
			},
			once: true,
		});
	}, [titleRef, subtitleRef]);
	return (
		<>
			<Box
				ref={sectionRef}
				{...props}
				sx={{
					textAlign: 'center',
					py: 8,
				}}>
				<Typography
					ref={titleRef}
					variant='h2'>
					{title}
				</Typography>
				<Typography
					ref={subtitleRef}
					variant='quote'>
					{subtitle}
				</Typography>
				<Grid
					container
					spacing={6}
					sx={{ p: { xs: 3, lg: 8 } }}>
					{CardList.map((item) => (
						<Grid
							item
							xs={12}
							md={12}
							lg={6}
							key={item.title}>
							<Link to={item.link}>
								<Item
									variant='outlined'
									sx={{
										borderRadius: 3,
										backgroundImage: `url(${item.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										height: 300,
									}}>
									<StyledCardContent>
										<Typography variant='h3'> {item.title} </Typography>
									</StyledCardContent>
								</Item>
							</Link>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}
export default LocationsSections;
