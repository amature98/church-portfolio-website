import React from "react";
import PropTypes from "prop-types";
import { styled, alpha, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Styled LinkButton component
const LinkButton = styled(Button)(({ theme }) => ({
  marginRight: 4,
  color: theme.palette.primary.light,
  ":hover": {
    backgroundColor: alpha(
      theme.palette.secondary.light,
      theme.palette.action.hoverOpacity
    ),
  },
}));

// NavLinkButton component
function NavLinkButton({ active, item, ...props }) {
  // Destructure title and path from the item object
  const { title, path } = item;

  // Check if the link is active
  const isActive = active(item.path);

  // Get theme
  const theme = useTheme();

  // Styles for active NavLink
  const activeNavLinkStyle = {
    color: "primary.light",
    backgroundColor: alpha(
      theme.palette.secondary.light,
      theme.palette.action.selectedOpacity
    ),
  };
  return (
    <>
      {/* LinkButton component for NavLink */}
      <LinkButton
        component={Link} // Use Link from react-router-dom
        to={path} // Path to navigate to
        sx={{ ...(isActive && activeNavLinkStyle) }} // Apply active styles if isActive is true
        {...props} // Spread additional props
      >
        {/* Display link title */}
        {title}
      </LinkButton>
    </>
  );
}

// Prop types for NavLinkButton component
NavLinkButton.propTypes = {
  item: PropTypes.object.isRequired, // item prop should be an object
  active: PropTypes.func, // active prop should be a function
};

export default NavLinkButton;
