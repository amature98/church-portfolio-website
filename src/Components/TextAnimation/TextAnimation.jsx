import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Typography } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);
const TextAnimation = ({
  color = "text.main",
  text,
  variant = "h1",
  delay = 1.0,
  trigger,
  className = "",
  ...props
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const tl = gsap.timeline({ delay });
      tl.from(textRef.current.childNodes, {
        y: 100,
        ease: "power4",
        duration: 2.0,
        opacity: 0,
        stagger: 0.75,
      });
    };
    ScrollTrigger.create({
      trigger: trigger || textRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: animateText,
      once: true,
    });
  }, [delay, trigger]);

  return (
    <Typography
      color={color}
      variant={variant}
      component="div"
      ref={textRef}
      className={className}
      {...props}
    >
      {text && text.split("\n").map((line, i) => <div key={i}>{line}</div>)}
    </Typography>
  );
};

export default TextAnimation;
