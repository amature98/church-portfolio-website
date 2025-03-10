"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { styled, useTheme, Button } from "@mui/material";
import PropTypes from "prop-types";

// Styled MUI Button
const LinkButton = styled("div")(({ theme }) => ({
  marginX: 4,
  marginY: 4,
  color: theme.palette.primary.contrastText,
  textTransform: "none",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export default function NavLinkButton({ item, ...props }) {
  const { title, path } = item;
  const pathname = usePathname();
  const theme = useTheme();

  // Ensure path is valid
  if (!path) {
    console.error(`Invalid path for NavLinkButton: ${title}`);
    return null; // Avoid rendering invalid links
  }

  const isActive = pathname === path;

  return (
    <Link href={path} passHref legacyBehavior>
      <LinkButton
        component="a"
        sx={{
          color: isActive ? theme.palette.secondary.main : theme.palette.primary.contrastText,
        }}
        {...props}
      >
        {title}
      </LinkButton>
    </Link>
  );
}

// Prop validation
NavLinkButton.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};