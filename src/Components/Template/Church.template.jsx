import React from "react";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import JoinChurchButton from "../Buttons/JoinChurch.button";
import ContributeButton from "../Buttons/Contribute.button";

function Template({
  churchName = "",
  text = "",
  serviceArray,
  ContactArray,
  contributeInfoArray,
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
        <Typography gutterBottom variant="h3" color="text.primary">
          Welcome to {churchName}
        </Typography>
        <Typography gutterBottom variant="body2">
          {text}
        </Typography>
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
          backgroundColor: (theme) => theme.palette.primary.main,
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
          <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
            Sunday Service Program
          </Typography>
          <Stack
            direction="row"
            divider={
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{ backgroundColor: "text.light" }}
              />
            }
          >
            {serviceArray.map((item, index) => (
              <Paper
                sx={{
                  textAlign: "center",
                  px: 2,
                  py: 2,
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
                key={index}
                elevation={0}
              >
                <Typography gutterBottom variant="h6" color="text.light">
                  {item.title}
                </Typography>
                <Typography color="text.light" variant="body2">
                  {item.time}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Template;
