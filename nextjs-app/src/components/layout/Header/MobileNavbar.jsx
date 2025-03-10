"use client";

import { useState, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import LogoNavLink from "../../ui/Buttons/LogoNavLink";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setContainer(window.document.body);
    }
  }, []);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      <LogoNavLink />
      <IconButton
        color="inherit"
        aria-label="Open navigation drawer"
        aria-expanded={open}
        onClick={toggleDrawer}
        sx={{ position: "absolute", top: 15, right: 30 }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <NavDrawer
        open={open}
        onClose={toggleDrawer}
        container={container}
        onClick={toggleDrawer}
      />
    </Box>
  );
}
