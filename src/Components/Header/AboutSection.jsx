import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ title, aboutText, button, ...props }) {
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const buttonRef = useRef(null);
	useEffect(() => {
		ScrollTrigger.create({
			trigger: sectionRef.current,
			start: 'top bottom',
			end: 'bottom bottom',
			onEnter: () => {
				const tl = gsap.timeline({ delay: 1 });
				tl
					.from(titleRef.current, {
						y: 200,
						opacity: 0,
						ease: 'power4.out',
						duration: 3,
					})
					.from(buttonRef.current, {
						opacity: 0,
						ease: 'power4.out',
						duration: 1,
					})
					.from(
						textRef.current,
						{
							x: -100,
							ease: 'power4.out',
							opacity: 0,
							duration: 3,
						},
						0,
					);
			},
			once: true,
		});
	}, [titleRef, textRef, buttonRef]);
	useEffect(() => {
		const stl = gsap.timeline({
			scrollTrigger: {
				trigger: titleRef.current,
				scrub: 1,
				start: 'top bottom',
				end: 'bottom top',
			},
		});
		stl.to(titleRef.current, { ease: 'power4', duration: 3 });
	}, [titleRef]);
	return (
		<>
			<Box
				ref={sectionRef}
				{...props}>
				<Typography
					component='div'
					variant='h2'
					sx={{ textAlign: 'center', mt: 4, mb: 4 }}
					ref={titleRef}>
					{title}
				</Typography>
				<Container
					maxWidth='md'
					sx={{ textAlign: 'center' }}>
					<Typography
						ref={textRef}
						variant='body1'>
						{aboutText}
					</Typography>
					<Button
						ref={buttonRef}
						variant='contained'
						size='large'
						component={Link}
						to='/About'
						endIcon={<ArrowForwardIcon fontSize='large' />}
						sx={{ mt: 4, mb: 4 }}>
						KNOW MORE
					</Button>
				</Container>
			</Box>
		</>
	);
}

export default AboutSection;
