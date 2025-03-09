"use client"; // ✅ Required for Next.js App Router (since hooks run on client)

import { AppBar, Container, CssBaseline, Toolbar, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import SmallScreenNavbar from "@/components/navbar/MobileNavbar";
import LargeScreenNavbar from "@/components/navbar/DesktopNavBar";

export default function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
        <Toolbar>
          <Container maxWidth="lg">{isSmallScreen ? <SmallScreenNavbar /> : <LargeScreenNavbar />}</Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
