import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Paper, Stack, useTheme } from "@mui/material";
import JoinChurchButton from "../Buttons/JoinChurch.button";
import ContributeButton from "../Buttons/Contribute.button";
import Carousel from "../Carousel/Carousel";
import TextAnimation from "../TextAnimation/TextAnimation";

function Template({
  churchName = "",
  text = "",
  serviceArray = [],
  ContactArray = [],
  contributeInfoArray = [],
  CarouselArray = [],
}) {
  const theme = useTheme();
  const hasCarouselItems = CarouselArray && CarouselArray.length > 0;

  return (
    <Box component="section">
      <Box
        sx={{
          width: "80vw",
          margin: "64px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <TextAnimation
          text={`Welcome to ${churchName}`}
          variant="h2"
          gutterBottom
        />
        <TextAnimation text={text} variant="body1" />

        <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
          <JoinChurchButton
            churchName={churchName}
            ContactArray={ContactArray}
          />
          <ContributeButton
            churchName={churchName}
            contributeInfoArray={contributeInfoArray}
          />
        </Stack>
      </Box>

      <Box
        sx={{
          p: 4,
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            p: 4,
          }}
        >
          <TextAnimation
            text="Sunday Service Program"
            variant="h2"
            sx={{ textAlign: "center" }}
          />

          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ mt: 2 }}
          >
            {serviceArray.map((service, index) => (
              <Paper
                key={index}
                sx={{
                  textAlign: "center",
                  px: 2,
                  py: 2,
                  backgroundColor: theme.palette.primary.light,
                  flex: 1,
                  minWidth: "150px",
                }}
                elevation={3}
              >
                <TextAnimation text={service.title} variant="h6" gutterBottom />
                <TextAnimation text={service.time} variant="body2" />
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>

      {hasCarouselItems && <Carousel CarouselArray={CarouselArray} />}
    </Box>
  );
}

Template.propTypes = {
  churchName: PropTypes.string,
  text: PropTypes.string,
  serviceArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ),
  ContactArray: PropTypes.array.isRequired,
  contributeInfoArray: PropTypes.array.isRequired,
  CarouselArray: PropTypes.array.isRequired,
};

export default Template;
