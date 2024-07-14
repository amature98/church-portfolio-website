import React from "react";

import { Box, Divider, Paper, Stack } from "@mui/material";

import JoinChurchButton from "../Buttons/JoinChurch.button";
import ContributeButton from "../Buttons/Contribute.button";
import Leadership from "../Components/Leadership";
import Carousel from "../Carousel/Carousel";
import TextAnimation from "../TextAnimation/TextAnimation";

function Template({
  churchName = "",
  text = "",
  serviceArray,
  ContactArray,
  contributeInfoArray,
  CarouselArray,
  leadersArray,
  title = "",
}) {
  return (
    <>
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
          backgroundColor: (theme) => theme.palette.primary.light,
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
            text={"Sunday Service Program"}
            variant="h2"
            sx={{ textAlign: "center" }}
          />
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" flexItem variant="middle" />
            }
          >
            {serviceArray.map((item, index) => (
              <Paper
                sx={{
                  textAlign: "center",
                  px: 2,
                  py: 2,
                  backgroundColor: (theme) => theme.palette.primary.light,
                }}
                key={index}
              >
                <TextAnimation text={item.title} gutterBottom variant="h6" />
                <TextAnimation
                  text={item.time}
                  variant="body2"
                />
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
      <Leadership
        title={title}
        leadersArray={leadersArray}
        textAlign="center"
      />
      <Carousel CarouselArray={CarouselArray} />
    </>
  );
}

export default Template;
