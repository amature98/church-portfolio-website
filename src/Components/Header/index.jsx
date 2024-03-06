import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = styled(Box)(({ theme, ...props }) => ({
	position: 'relative',
	height: props.height || '100vh',
	display: 'flex',
	alignItems: 'center',
}));
const BackgroundImage = styled('div')(({ theme, ...props }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: props.bgImage
		? `url(${props.bgImage})`
		: 'none',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	zIndex: -1,
}));

function Index({ title, headerText, ...props }) {
	const bgRef = useRef(null);
	const titleRef = useRef(null);
	const headerTextRef = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			bgRef.current,
			{ scale: 1.2 },
			{ scale: 1, duration: 6, ease: 'power1.inOut' },
		);
		const tl = gsap.timeline({ delay: 1.0 });
		tl.from([titleRef.current.childNodes, headerTextRef.current.childNodes], {
			y: 100,
			ease: 'power4',
			duration: 2.5,
			opacity: 0,
		});
	}, []);
	return (
		<>
			<Header {...props}>
				<BackgroundImage
					{...props}
					ref={bgRef}
				/>
				<Container maxWidth='xl'>
					<Typography
						variant='h1'
						component='div'
						ref={titleRef}>
						{title.split('\n').map((line, i) => (
							<div key={i}> {line} </div>
						))}
					</Typography>
					<Typography
						variant='h5'
						component='div'
						ref={headerTextRef}>
						{headerText.split('\n').map((line, i) => (
							<div key={i}> {line} </div>
						))}
					</Typography>
				</Container>
			</Header>
		</>
	);
}
export default Index;
