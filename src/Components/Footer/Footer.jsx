import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LogoNavLink from "../Buttons/LogoNavLink";
import { navLinks } from "../Navigation/NavLinks";

function Footer() {
  return (
    <Box
      sx={{
        paddingY: 8,
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          width: "90vw",
          margin: "auto",
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} md={4} lg={4}>
            <LogoNavLink />
            <Typography variant="body1" gutterBottom sx={{ my: 4 }}>
              "...My House Shall Be Called A House Of Prayer For All Nations...'
              Mark 11:17"
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography gutterBottom variant="h6">
              Quick Links
            </Typography>
            {/* {navLinks.filter()} */}
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Typography gutterBottom variant="h6">
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
