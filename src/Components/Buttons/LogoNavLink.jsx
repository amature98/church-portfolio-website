import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import Logo from "../../Images/logo.png";

function LogoNavLink() {
  return (
    <>
      <Button component={Link} to="/">
        <img src={''} alt="logo" />
      </Button>
    </>
  );
}

export default LogoNavLink;
