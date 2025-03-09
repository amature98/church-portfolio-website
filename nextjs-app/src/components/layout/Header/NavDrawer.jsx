"use client";

import React, { useCallback } from "react";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  List,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoNavLink from "../Buttons/LogoNavLink"; 
import { navTitles, navLinks } from "./NavLinks"; 

export default function NavDrawer({
  anchor = "right",
  container,
  variant = "temporary",
  open,
  onClose,
  onClick,
}) {
  const pathname = usePathname(); // ✅ Get current route in Next.js

  // ✅ Function to check if a path matches the current location
  const match = useCallback(
    (path) => (path ? pathname.startsWith(path) : false),
    [pathname]
  );

  // ✅ Function to group nav links by categories
  const mapLinksByFilter = useCallback(() => {
    const linksByTitle = {};
    navTitles.forEach(({ title }) => {
      linksByTitle[title] = navLinks.filter((link) => link.filter === title);
    });
    return Object.entries(linksByTitle).map(([title, links]) => ({ title, links }));
  }, []);

  const links = mapLinksByFilter();

  // ✅ Drawer content
  const drawer = (
    <Box>
      {/* Header - Logo & Close Button */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          borderBottom: (theme) => `0.1px solid ${theme.palette.divider}`,
          mb: "30px",
          px: { xs: 1, sm: 2, md: 4, lg: 6 },
          pb: 2,
        }}
      >
        <LogoNavLink />
        <IconButton aria-label="close" onClick={onClick}>
          <CloseIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Stack>

      {/* Navigation Links */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {links.map((group, index) => (
            <Grid item xs={4} key={index}>
              <Typography color="text.secondary" variant="h6">
                {group.title}
              </Typography>
              <List>
                {group.links.map((link, idx) => (
                  <Link key={idx} href={link.href} passHref>
                    <Typography
                      sx={{
                        color: match(link.href) ? "primary.main" : "text.secondary",
                        cursor: "pointer",
                        "&:hover": { color: "primary.light" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  // ✅ Drawer Component
  return (
    <Drawer
      anchor={anchor}
      container={container}
      variant={variant}
      open={open}
      onClose={onClose}
      aria-hidden={!open} // ✅ Improves accessibility
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.text.light,
          width: "100vw",
          height: "100vh",
          display: "flex",
          padding: 4,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
