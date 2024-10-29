import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { Beliefs } from "../Arrays/Beliefs.array";
import TextAnimation from "../TextAnimation/TextAnimation";

function Text() {
  return (
    <>
      <Box component="section" id="beliefs" sx={{ pb: 6 }}>
        {Beliefs.map((item, index) => (
          <Card
            key={index}
            raised
            sx={{
              mb: 4,
              p: 4,
              backgroundColor: (theme) =>
                item.title === "Brief History"
                  ? theme.palette.error.light
                  : theme.palette.secondary.light,
              borderRadius: 3,
            }}
          >
            {item.title === "Brief History" ? (
              <>
                <TextAnimation variant="h4" gutterBottom text={item.title} />
                <TextAnimation variant="body2" gutterBottom text={item.text} />
              </>
            ) : (
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <TextAnimation gutterBottom variant="h4" text={item.title} />
                  <TextAnimation
                    gutterBottom
                    variant="body2"
                    text={item.text}
                  />
                </Grid>
              </Grid>
            )}
          </Card>
        ))}
      </Box>
    </>
  );
}

export default Text;
