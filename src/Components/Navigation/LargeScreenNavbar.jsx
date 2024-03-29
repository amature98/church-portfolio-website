import React, { useState } from "react";
// Import Links array
import { largeScreenLinks, navLinks } from "./NavLinks";
// Import react-router-dom functions
import { matchPath, useLocation } from "react-router-dom";
// Importing MUI Commponents
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
// Import Customised Component
import NavLinkButton from "../Buttons/NavLinkButton";
import NavDrawer from "./NavDrawer";
import LogoNavLink from "../Buttons/LogoNavLink";
// Import Icon
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function LargeScreenNavbar({ window }) {
  // Determine container for the Menu
  const container =
    window !== undefined ? () => window.document.body : undefined;
  // State for drawer
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((prevState) => !prevState);
  // State for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  // Get current path
  const { pathname } = useLocation();
  // Function to check if a link is active
  const active = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <LogoNavLink />
      {/* Navigation Links */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {largeScreenLinks.map((link) =>
          link.title === "Ministries" ? (
            // Dropdown Menu for "Ministries" link
            <Box
              key={link.title}
              onMouseEnter={handleClick}
              onMouseLeave={handleClose}
            >
              <NavLinkButton
                key={link.title}
                item={link}
                active={active}
                endIcon={<KeyboardArrowDownIcon />}
              />
              {/* Menu for "Ministries" */}
              <Menu
                elevation={24}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                  "& .MuiPaper-root": {
                    borderRadius: 3,
                    backgroundColor: (theme) => theme.palette.primary.main,
                  },
                }}
              >
                {/* Render Ministries links */}
                {navLinks
                  .filter((item) => item.filter === "Ministries")
                  .map((ministry) => (
                    <MenuItem key={ministry.title} onClick={handleClose}>
                      <NavLinkButton item={ministry} active={active} />
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          ) : (
            // Regular NavLinkButton
            <NavLinkButton key={link.title} item={link} active={active} />
          )
        )}
      </Box>
      {/* Menu Icon */}
      <IconButton
        color="inherit"
        size="large"
        aria-label="togglebtn"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      {/* Navigation Drawer */}
      <NavDrawer
        open={open}
        onClose={toggleDrawer}
        container={container}
        onClick={toggleDrawer}
      />
    </Box>
  );
}
export default LargeScreenNavbar;
