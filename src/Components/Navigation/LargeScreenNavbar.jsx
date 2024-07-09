import React, { useState, useCallback } from "react";
import { useLocation, matchPath } from "react-router-dom";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { largeScreenLinks, navLinks } from "./NavLinks";
import NavLinkButton from "../Buttons/NavLinkButton";
import NavDrawer from "./NavDrawer";
import LogoNavLink from "../Buttons/LogoNavLink";

function LargeScreenNavbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { pathname } = useLocation();

  const toggleDrawer = useCallback(() => setOpen((prevState) => !prevState), []);
  const handleClick = useCallback((event) => setAnchorEl(event.currentTarget), []);
  const handleClose = useCallback(() => setAnchorEl(null), []);

  const isActive = useCallback(
    (path) => (path ? !!matchPath({ path, end: false }, pathname) : false),
    [pathname]
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LogoNavLink />
      <Box sx={{ display: "inline-flex" }}>
        {largeScreenLinks.map((link) =>
          link.title === "Ministries" ? (
            <Box
              key={link.title}
              onMouseEnter={handleClick}
              onMouseLeave={handleClose}
            >
              <NavLinkButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                item={link}
                active={isActive}
                endIcon={<KeyboardArrowDownIcon />}
              />
              <Menu
                id="basic-menu"
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
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {navLinks
                  .filter((item) => item.filter === "Ministries")
                  .map((ministry) => (
                    <MenuItem key={ministry.title} onClick={handleClose}>
                      <NavLinkButton item={ministry} active={isActive} />
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          ) : (
            <NavLinkButton key={link.title} item={link} active={isActive} />
          )
        )}
      </Box>
      <IconButton
        size="large"
        aria-label="toggle drawer"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <NavDrawer open={open} onClose={toggleDrawer} onClick={toggleDrawer} />
    </Box>
  );
}
export default LargeScreenNavbar;