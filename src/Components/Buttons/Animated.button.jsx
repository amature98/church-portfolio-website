import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AnimatedButton = ({ to, children, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: buttonRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        gsap.from(buttonRef.current, {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3.5,
        });
      },
      once: true,
    });
  }, []);

  return (
    <Button
      ref={buttonRef}
      component={Link}
      to={to}
      {...props}
      sx={{
        my: 2,
        color: (theme) => theme.palette.text.secondary,
        backgroundColor: (theme) => theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;
