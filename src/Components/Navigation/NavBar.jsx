import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SmallScreenNavbar from "./SmallScreenNavbar.jsx";
import LargeScreenNavbar from "./LargeScreenNavbar.jsx";

// Default function to render the navigation bar
function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Container maxWidth="false">
            {isSmallScreen ? <SmallScreenNavbar /> : <LargeScreenNavbar />}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
