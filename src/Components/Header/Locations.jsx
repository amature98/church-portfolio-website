import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScrollTrigger } from "gsap/all";
import { CardList } from "../Arrays/Arrays";

const Item = styled(Card)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.common.white,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
    zIndex: 1,
  },
}));

const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 2,
}));

gsap.registerPlugin(ScrollTrigger);

function LocationsSections({ title, subtitle, ...props }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        const tl = gsap.timeline({ delay: 1.0 });
        tl.from([titleRef.current, subtitleRef.current], {
          y: 200,
          opacity: 0,
          ease: "power4.out",
          duration: 3,
          stagger: 0.2,
        });
      },
      once: true,
    });
  }, [titleRef, subtitleRef]);
  return (
    <>
      <Box
        component="section"
        id="churches"
        ref={sectionRef}
        {...props}
        sx={{
          textAlign: "center",
          py: 4,
        }}
      >
        <Typography ref={titleRef} variant="h2">
          {title}
        </Typography>
        <Typography ref={subtitleRef} variant="body1">
          {subtitle}
        </Typography>
        <Grid container spacing={3} sx={{ p: { xs: 3, lg: 8 } }}>
          {CardList.map((item) => (
            <Grid item xs={12} md={12} lg={6} key={item.title}>
              <Link to={item.link}>
                <Item
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 300,
                  }}
                >
                  <StyledCardContent>
                    <Typography variant="h3"> {item.title} </Typography>
                  </StyledCardContent>
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
export default LocationsSections;
