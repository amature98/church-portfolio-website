import React from "react";
import PropTypes from "prop-types";
import { Box, ListItemButton, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

function NavItem({ item, active }) {
  const { title, path } = item;
  const isActive = active(item.path);
  return (
    <ListItemButton
      component={Link}
      to={path}
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
  );
}
NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.func,
};

export default NavItem;
