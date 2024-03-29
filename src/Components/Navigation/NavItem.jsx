import React from "react";
import PropTypes from "prop-types";
import { alpha, styled } from "@mui/material/styles";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Function to create a custom styled nav item
const StyledNavItem = styled(ListItemButton)(({ theme }) => ({
  ":hover": {
    backgroundColor: alpha(
      theme.palette.action.hover,
      theme.palette.action.hoverOpacity
    ),
  },
}));

// Default function that renders the nav-items
function NavItem({ item, active }) {
  const { title, path } = item;
  const isActive = active(item.path);
  const theme = useTheme();
  const activeNavItemStyle = {
    color: "text.secondary",
    backgroundColor: alpha(
      theme.palette.action.active,
      theme.palette.action.activatedOpacity
    ),
    paddingX: 1,
    maxWidth: "75%",
  };
  return (
    <ListItem>
      <StyledNavItem
        disableGutters
        component={Link}
        to={path}
        sx={{ ...(isActive && activeNavItemStyle) }}
      >
        <ListItemText>
          <Typography variant="body2" sx={{ color: "#f7f7f7" }}>
            {title}
          </Typography>
        </ListItemText>
      </StyledNavItem>
    </ListItem>
  );
}
NavItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.func,
};

export default NavItem;
