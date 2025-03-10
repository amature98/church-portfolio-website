"use client";

import { useEffect, useState } from "react";
import { AppBar, Toolbar, Container, useMediaQuery, useTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavBar";

export default function Header() {
  const theme = useTheme();
  const [isClient, setIsClient] = useState(false);

  // Ensure media query runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isSmallScreen = isClient ? useMediaQuery(theme.breakpoints.down("md")) : false;

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
        <Toolbar>
          <Container maxWidth="lg">
            {isSmallScreen ? <MobileNavbar /> : <DesktopNavbar />}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
