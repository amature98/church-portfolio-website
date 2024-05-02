import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import Logo from "../../Images/logo.png";

function LogoNavLink() {
  return (
    <>
      <Button
        component={Link}
        to="/"
        sx={{ width: 40, height: 40, display: "inline-flex" }}
      >
        <img src="/Logo_Main/apple-touch-icon.png" alt="logo" />
      </Button>
    </>
  );
}

export default LogoNavLink;
