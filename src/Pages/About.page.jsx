// Import required components
import React from "react";
import { Container } from "@mui/material";
// Import needed pages
import Page from "./Page";
import Header from "../Components/Header/Header";
import Text from "../Components/Components/Text";
import Leadership from "../Components/Components/Leadership";
import BgImage from "../Images/cross.jpg";
// Import Array
import { Leaders } from "../Components/Arrays/Arrays";

function About() {
  return (
    <>
      <Page title="About | PCEA MUKINYI PARISH">
        <Header
          height="70vh"
          title="Who are we?"
          headerText="Get to know us a little bit further"
          bgimage={BgImage}
        />
        <Container maxWidth="none" sx={{ width: "90vw", mx: "auto", my: 8 }}>
          <Text />
          {/* <Leadership
            leadersArray={Leaders}
            title="Kirk Session - the Mukinyi Leadership"
          /> */}
        </Container>
      </Page>
    </>
  );
}

export default About;
