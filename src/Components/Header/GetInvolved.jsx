import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
  Icon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { gridItems } from "../Arrays/Arrays";

gsap.registerPlugin(ScrollTrigger);

function GetInvolved() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemRef = useRef(null);
  const textRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.from(titleRef.current, {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3,
        });
      },
      once: true,
    });
  }, [titleRef]);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline({ delay: 1 });
        tl.from(textRef.current, {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3,
        });
      },
      once: true,
    });
  }, [textRef]);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline({ delay: 1 });
        tl.from(itemRef.current, {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3,
        });
      },
      once: true,
    });
  }, [itemRef]);
  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 90px 32px ",
        backgroundColor: (theme) => theme.palette.primary.light,
      }}
    >
      <Grid container spacing={6} flexDirection={isMobile ? "column" : "row"}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Box
            sx={{
              width: isMobile ? "80vw" : "initial",
              margin: isMobile ? "auto" : "initial",
              textAlign: isMobile ? "center" : "",
            }}
          >
            <Typography ref={titleRef} variant="h4" sx={{ mb: 4 }}>
              Ways to experience God's Love at Mukinyi
            </Typography>
            <Typography ref={textRef} variant="body2">
              There are several ways to participate in Mukinyi. Whatever your
              comfort level, there are opportunities for you to join in
              community and draw nearer to Jesus.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Grid
            ref={itemRef}
            container
            spacing={6}
            sx={{
              width: isMobile ? "70vw" : "initial",
              margin: isMobile ? "auto" : "",
            }}
          >
            {gridItems.map((item) => (
              <Grid key={item.title} item xs={12} sm={12} md={6} lg={6}>
                <Icon color="secondary" fontSize="large">
                  {item.icon}
                </Icon>
                <Typography variant="h4" sx={{ py: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ py: 2 }}>
                  {item.text}
                </Typography>
                <Button
                  component={Link}
                  to={item.path}
                  variant="contained"
                  endIcon={isHovered ? <RemoveIcon /> : <AddIcon />}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  sx={{
                    my: 2,
                    backgroundColor: (theme) => theme.palette.secondary.main,
                  }}
                >
                  {item.buttontext}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetInvolved;
