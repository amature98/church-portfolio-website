import React, { useEffect, useRef } from 'react';
import { gsap, CSSPlugin } from 'gsap';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

gsap.registerPlugin(CSSPlugin);

const StyledHeader = styled(Box)(({ height }) => ({
	position: 'relative',
	height: height || '100vh',
	display: 'flex',
	alignItems: 'center',
}));
const BackgroundImage = styled('div')(({ bgimage }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: bgimage ? `url(${bgimage})` : 'none',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	zIndex: -1,
}));

function Header({ title, headerText, height, bgimage, textAlign = 'start' }) {
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
			<StyledHeader height={height}>
				<BackgroundImage
					bgimage={bgimage}
					ref={bgRef}
				/>
				<Container
					maxWidth='xl'
					sx={{ textAlign: textAlign }}>
					<Typography
						variant='h1'
						component='div'
						ref={titleRef}>
						{title && title.split('\n').map((line) => <div key={line}> {line} </div>)}
					</Typography>
					<Typography
						variant='h5'
						component='div'
						ref={headerTextRef}>
						{headerText &&
							headerText.split('\n').map((line, i) => <div key={i}> {line} </div>)}
					</Typography>
				</Container>
			</StyledHeader>
		</>
	);
}
export default Header;
