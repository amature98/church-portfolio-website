import { Box, Card, Grid } from "@mui/material";
import React from "react";
import { Beliefs } from "../Arrays/Beliefs.array";
import TextAnimation from "../TextAnimation/TextAnimation";

function Text() {
  return (
    <>
      <Box component="section" id="beliefs">
        <Card
          raised
          sx={{
            mb: 4,
            p: 4,
            backgroundColor: (theme) => theme.palette.error.light,
            borderRadius: 3,
          }}
        >
          <TextAnimation variant="h4" gutterBottom text="Brief History" />
          <TextAnimation
            variant="body2"
            gutterBottom
            text={
              "Welcome to PCEA Mukinyi Parish, a vibrant community where faith thrives, and hope inspires. Here, we believe in nurturing spiritual growth and fostering genuine connections. Whether you're seeking peace, companionship, or a deeper relationship with God, you’ll find open hearts and a sense of belonging. Our parish is more than a place of worship; it's a home where we walk together, uplift one another, and experience the transformative power of God's love. Come as you are, and let’s embark on this spiritual journey together, guided by faith and compassion."
            }
          />
        </Card>
        <Card
          raised
          sx={{
            mb: 4,
            p: 4,
            backgroundColor: (theme) => theme.palette.success.light,
            borderRadius: 3,
          }}
        >
          <TextAnimation gutterBottom variant="h4" text={"Congregations"} />
          <TextAnimation
            gutterBottom
            variant="body2"
            text={}
          />
        </Card>
        <Card
          raised
          sx={{
            mb: 4,
            p: 4,
            backgroundColor: (theme) => theme.palette.secondary.light,
            borderRadius: 3,
          }}
        >
          <Grid container spacing={6}>
            {Beliefs.map((item) => (
              <Grid key={item.title} item xs={4}>
                <TextAnimation gutterBottom variant="h6" text={item.title} />
                <TextAnimation gutterBottom variant="body2" text={item.text} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </Box>
    </>
  );
}
export default Text;
