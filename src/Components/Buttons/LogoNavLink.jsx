import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logo from "../../Images/logo.png";

function LogoNavLink() {
  return (
    <>
      <Box
        component={Link}
        to="/"
        sx={{
          width: 40,
          height: 40,
          cursor: "pointer",
          display: "inline-flex",
        }}
      >
        <img src={Logo} alt="logo" />
      </Box>
    </>
  );
}

export default LogoNavLink;
