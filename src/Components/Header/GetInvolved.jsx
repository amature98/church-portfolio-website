import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Box,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { gridItems } from "../Arrays/Arrays";

import TextAnimation from "../TextAnimation/TextAnimation";
import AnimatedButton from "../Buttons/Animated.button";
import ContributeBtn from "../Buttons/Contribute.button";

import { parishAccInfo } from "../Arrays/Arrays";

gsap.registerPlugin(ScrollTrigger);

function GetInvolved() {
  const sectionRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => setHoveredIndex(index), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  useEffect(() => {
    const animateElements = () => {
      const tl = gsap.timeline();
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
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: animateElements,
      once: true,
    });

    gridItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: `.grid-item-${index}`,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.from(`.grid-item-${index}`, {
            y: 200,
            opacity: 0,
            ease: "power4.out",
            duration: 1.5,
          });
        },
        once: true,
      });
    });
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "90px 32px",
        textAlign: isMobile ? "center" : "start",
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
    >
      <Grid container spacing={6} flexDirection={isMobile ? "column" : "row"}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              width: isMobile ? "80vw" : "initial",
              margin: isMobile ? "auto" : "initial",
            }}
          >
            <TextAnimation
              text={"Ways to experience God's Love at Mukinyi"}
              variant="h2"
              sx={{ mb: 4 }}
              trigger={sectionRef.current}
              className="animate-title"
            />
            <TextAnimation
              text={
                "There are several ways to participate in Mukinyi. Whatever your comfort level, there are opportunities for you to join in community and draw nearer to Jesus."
              }
              variant="body1"
              delay={1.0}
              trigger={sectionRef.current}
              className="animate-text"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Grid
            container
            spacing={6}
            sx={{
              width: isMobile ? "70vw" : "initial",
              margin: isMobile ? "auto" : "",
            }}
          >
            {gridItems.map((item, index) => (
              <Grid
                key={item.title}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={`grid-item-${index}`}
              >
                <Icon color="secondary" fontSize="large">
                  {item.icon}
                </Icon>
                <Typography variant="h3" sx={{ pt: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ py: 1.0 }}>
                  {item.text}
                </Typography>
                {item.type === "modal" ? (
                  <ContributeBtn
                    contributeInfoArray={parishAccInfo}
                    churchName="PCEA Mukinyi Parish"
                  />
                ) : (
                  <AnimatedButton
                    to={item.path}
                    variant="contained"
                    endIcon={
                      hoveredIndex === index ? (
                        <ArrowForwardIosRoundedIcon />
                      ) : (
                        <Icon> {item.icon} </Icon>
                      )
                    }
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.buttontext}
                  </AnimatedButton>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetInvolved;
