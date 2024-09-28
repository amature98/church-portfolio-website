import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Box, Card, CardContent, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ScrollTrigger } from "gsap/all";
import { CardList } from "../Components/Arrays/Arrays";
import TextAnimation from "../Components/TextAnimation/TextAnimation";
import Page from "./Page";

const Item = styled(Card)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.common.white,
  filter: "grayscale(100%)",
  ":hover": {
    filter: "grayscale(0%)",
  },
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

function churchPage({ ...props }) {
  return (
    <Page title="PCEA Mukinyi Parish | Churches">
      <Paper
        component="section"
        elevation={2}
        sx={{ width: "90dvw", height: "75dvh", borderRadius: 4, mx: "auto", mt: 8 }}
      >
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1iHvGgTj1WTg-P9lzgC6mJQ-IVq3MHYY&ehbc=2E312F&noprof=1"
          title="Google Maps"
          width="100%"
          height="100%"
          allowFullScreen
        ></iframe>
      </Paper>
      <Box
        component="section"
        id="churches"
        {...props}
        sx={{
          textAlign: "center",
          py: 4,
        }}
      >
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
                    <TextAnimation variant="h3" text={item.title} />
                  </StyledCardContent>
                </Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
}
export default churchPage;
