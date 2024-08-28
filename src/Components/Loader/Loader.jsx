import React from "react";
import { Box, CircularProgress, useTheme, useMediaQuery } from "@mui/material";
import { circularProgressClasses } from "@mui/material/CircularProgress";

function Loader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: theme.palette.primary.light,
          }}
          size={isMobile ? 30 : 60}
          thickness={1.5}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: theme.palette.primary.dark,
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={isMobile ? 30 : 60}
          thickness={1.5}
        />
      </Box>
    </Box>
  );
}

export default Loader;
