import React from "react";
import Page from "../../Pages/Page";
import Header from "../Header/Header";
import Card from "../Cards/index";
import Carousel from "../Carousel/Carousel";
import { Box, Typography } from "@mui/material";

function GroupTemplate({
  groupName,
  groupImage,
  groupMotto,
  aboutDescription,
  aboutImage,
  ContactArray,
  missionStatement,
  missionImage,
  visionStatement,
  CarouselArray,
}) {
  return (
    <>
      <Page title={`${groupName} - PCEA Mukinyi Parish`}>
        <Header
          height="70vh"
          title={groupName}
          headerText={groupMotto}
          bgimage={groupImage}
        />
        <Box
          component="section"
          sx={{
            width: "90vw",
            mt: 6,
            marginX: "auto",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
          }}
        >
          <Card
            groupName={groupName}
            description={aboutDescription}
            image={aboutImage}
            ContactArray={ContactArray}
          />
          <Card
            groupName={groupImage}
            image={missionImage}
            missionStatement={missionStatement}
            visionStatement={visionStatement}
            direction="left"
          />
        </Box>
        <Box><Carousel CarouselArray={CarouselArray} /></Box>
      </Page>
    </>
  );
}

export default GroupTemplate;
