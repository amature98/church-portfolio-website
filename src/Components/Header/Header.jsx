import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Removed CSSPlugin import as it's not needed
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components for Header and BackgroundImage
const StyledHeader = styled(Box)(({ height }) => ({
  position: "relative",
  height: height || "100vh",
  display: "flex",
  alignItems: "center",
}));

const BackgroundImage = styled("div")(({ bgimage }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: bgimage ? `url(${bgimage})` : "none", // Changed background to backgroundImage
  backgroundSize: "cover",
  backgroundPosition: "center center",
  ":before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
  },
}));

function Header({ title, headerText, height, bgimage }) {
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const headerTextRef = useRef(null);

  useEffect(() => {
    // Animation for background scaling
    gsap.fromTo(
      bgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 6, ease: "power1.inOut" }
    );
    // Animation timeline for title and headerText
    const tl = gsap.timeline({ delay: 1.0 });
    tl.from([titleRef.current.childNodes, headerTextRef.current.childNodes], {
      y: 100,
      ease: "power4",
      duration: 2.5,
      opacity: 0,
      stagger: 0.75, // Added stagger effect for child nodes
    });
  }, []);

  return (
    <StyledHeader height={height}>
      {/* Background Image */}
      <BackgroundImage bgimage={bgimage} ref={bgRef} />
      {/* Container for title and headerText */}
      <Container sx={{ textAlign: "center", width: "80vw" }}>
        {/* Title */}
        <Typography
          color="text.secondary"
          variant="h1"
          component="div"
          ref={titleRef}
        >
          {title &&
            title.split("\n").map((line) => <div key={line}> {line} </div>)}
        </Typography>
        {/* Header Text */}
        <Typography
          color="text.secondary"
          variant="h5"
          component="div"
          ref={headerTextRef}
        >
          {headerText &&
            headerText
              .split("\n")
              .map((line, i) => <div key={i}> {line} </div>)}
        </Typography>
      </Container>
    </StyledHeader>
  );
}

export default Header;
