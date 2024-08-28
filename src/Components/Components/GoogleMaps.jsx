import React from "react";
import { Box, Paper } from "@mui/material";
import TextAnimation from "../TextAnimation/TextAnimation";

function GoogleMaps() {
  return (
    <>
      <Box
        sx={{ backgroundColor: (theme) => theme.palette.primary.light, p: 8 }}
      >
        <Box sx={{ pb: 4, textAlign: "center" }}>
          <TextAnimation
            text={"Locate your fellowship district"}
            color="text.primary"
            variant="h3"
            gutterBottom
          />
          <TextAnimation
            text={
              "Do you attend our any of our churches and would like to be part of our district fellowships but do not know which one you belong to? Use the map below to discover our district mapping and where you belong."
            }
            gutterBottom
            variant="body2"
          />
        </Box>
        <Paper elevation={2} sx={{ height: "75vh", borderRadius: 4 }}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1iHvGgTj1WTg-P9lzgC6mJQ-IVq3MHYY&ehbc=2E312F&noprof=1"
            title="Google Maps"
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </Paper>
      </Box>
    </>
  );
}

export default GoogleMaps;
