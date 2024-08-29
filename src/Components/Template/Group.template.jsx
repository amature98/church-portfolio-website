import React from "react";
import PropTypes from "prop-types";
import Page from "../../Pages/Page";
import Header from "../Header/Header";
import Card from "../Cards/index";
import Carousel from "../Carousel/Carousel";
import { Box } from "@mui/material";

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
  const hasCarouselItems = CarouselArray && CarouselArray.length > 0;

  return (
    <Page title={`${groupName} | PCEA Mukinyi Parish`}>
      <Header
        height="70vh"
        title={groupName}
        headerText={groupMotto}
        bgimage={groupImage}
      />
      <Box
        component="section"
        sx={{
          width: "90dvw",
          mt: 6,
          marginX: "auto",
          display: "flex",
          flexDirection: "column",
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
      {hasCarouselItems && (
        <Box>
          <Carousel CarouselArray={CarouselArray} />
        </Box>
      )}
    </Page>
  );
}

GroupTemplate.propTypes = {
  groupName: PropTypes.string.isRequired,
  groupImage: PropTypes.string.isRequired,
  groupMotto: PropTypes.string.isRequired,
  aboutDescription: PropTypes.string.isRequired,
  aboutImage: PropTypes.string.isRequired,
  ContactArray: PropTypes.arrayOf(PropTypes.object),
  missionStatement: PropTypes.string.isRequired,
  missionImage: PropTypes.string.isRequired,
  visionStatement: PropTypes.string.isRequired,
  CarouselArray: PropTypes.arrayOf(PropTypes.object),
};

GroupTemplate.defaultProps = {
  ContactArray: [],
  CarouselArray: [],
};

export default GroupTemplate;
