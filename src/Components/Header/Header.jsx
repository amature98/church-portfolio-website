import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextAnimation from "../TextAnimation/TextAnimation";

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
  backgroundImage: bgimage ? `url(${bgimage})` : "none",
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

  useEffect(() => {
    gsap.fromTo(
      bgRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 6, ease: "power1.inOut" }
    );
  }, []);

  return (
    <StyledHeader height={height}>
      <BackgroundImage bgimage={bgimage} ref={bgRef} />
      <Container sx={{ textAlign: "center", width: "80dvw" }}>
        <TextAnimation
          color="text.secondary"
          text={title}
          variant="h1"
          delay={1.0}
        />
        <TextAnimation
          color="text.secondary"
          text={headerText}
          variant="h4"
          delay={2.0}
        />
      </Container>
    </StyledHeader>
  );
}

export default Header;
