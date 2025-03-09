"use client";

import PropTypes from "prop-types";
import { Box, ListItemButton } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ item }) {
  const { title, path } = item;
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path} passHref legacyBehavior>
      <ListItemButton
        disableGutters
        sx={{
          pl: 2,
          minHeight: 44,
          borderRadius: 0.75,
          typography: "body1",
          color: "text.secondary",
          ...(isActive && {
            fontWeight: "fontWeightSemiBold",
            bgcolor: (theme) => theme.palette.action.selected,
            "&:hover": {
              bgcolor: (theme) => theme.palette.action.hover,
            },
          }),
        }}
      >
        <Box component="span"> {title} </Box>
      </ListItemButton>
    </Link>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavItem;