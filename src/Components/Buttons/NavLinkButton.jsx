import React from "react";
import PropTypes from "prop-types";
import { styled, alpha, useTheme, Button } from "@mui/material";
import { Link } from "react-router-dom";

// Styled LinkButton component
const LinkButton = styled(Button)(({ theme }) => ({
  marginX: 4,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: "transparent"
  },
}));

function NavLinkButton({ active, item, ...props }) {
  const { title, path } = item;
  const isActive = active(path);
  const theme = useTheme();

  const activeNavLinkStyle = {
    color: theme.palette.secondary.main,
  };

  return (
    <LinkButton
      component={Link}
      to={path}
      sx={isActive ? activeNavLinkStyle : null}
      {...props}
    >
      {title}
    </LinkButton>
  );
}

// Prop types for NavLinkButton component
NavLinkButton.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  active: PropTypes.func.isRequired,
};

export default NavLinkButton;
