import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Box, Container } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import TextAnimation from "../TextAnimation/TextAnimation";
import AnimatedButton from "../Buttons/Animated.button";

gsap.registerPlugin(ScrollTrigger);

function AboutSection({ title, button, aboutText, ...props }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline({ delay: 1.5 });
        tl.from(
          sectionRef.current.querySelectorAll(".animate-title, .animate-text"),
          {
            y: 200,
            opacity: 0,
            ease: "power4.out",
            duration: 3,
            stagger: 0.5,
          }
        );
      },
      once: true,
    });
  }, []);

  return (
    <Box ref={sectionRef} {...props} sx={{ textAlign: "center", mt: 4, mb: 4 }}>
      <TextAnimation text={title} variant="h2" className="animate-title" />
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <TextAnimation
          text={aboutText}
          variant="body1"
          className="animate-text"
        />
        <AnimatedButton
          to="/about"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIosRoundedIcon fontSize="large" />}
        >
          {button}
        </AnimatedButton>
      </Container>
    </Box>
  );
}

export default AboutSection;
