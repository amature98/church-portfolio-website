import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import TextAnimation from "../TextAnimation/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ title, aboutText, button, ...props }) {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline({ delay: 1.5 });
        tl.from(sectionRef.current.querySelectorAll(".animate-text"), {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3,
          stagger: 0.5,
        }).from(
          buttonRef.current,
          {
            y: 50,
            opacity: 0,
            ease: "power4.out",
            duration: 1,
          },
          "-=2"
        );
      },
      once: true,
    });
  }, []);

  return (
    <Box ref={sectionRef} {...props} sx={{ textAlign: "center", mt: 4, mb: 4 }}>
      <TextAnimation
        text={title}
        variant="h2"
        delay={0.5}
        className="animate-text"
      />
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <TextAnimation
          text={aboutText}
          variant="body1"
          delay={1.0}
          className="animate-text"
        />
        <Button
          ref={buttonRef}
          variant="contained"
          size="large"
          component={Link}
          to="/about"
          endIcon={<ArrowForwardIosRoundedIcon fontSize="large" />}
          sx={{
            m: 4,
            background: (theme) => theme.palette.secondary.main,
          }}
        >
          {button}
        </Button>
      </Container>
    </Box>
  );
}

export default AboutSection;
