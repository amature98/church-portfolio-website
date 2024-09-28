import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import JoinGroupButton from "../Buttons/JoinGroup.button";
import TextAnimation from "../TextAnimation/TextAnimation";

function index({
  groupName,
  ContactArray,
  direction,
  description,
  image,
  missionStatement,
  visionStatement,
}) {
  return (
    <>
      <Card sx={{ display: "flex" }} raised variant="">
        <Grid container>
          {direction === "left" ? (
            <>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  image={image}
                  alt="image"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box>
                      <TextAnimation gutterBottom variant="h4" text="Mission" />
                      <TextAnimation gutterBottom variant="body2" text={missionStatement}/>
                    </Box>
                    <Box>
                      <TextAnimation gutterBottom variant="h4" text='Vision' />
                      <TextAnimation gutterBottom variant="body2" text={visionStatement} />
                    </Box>
                  </CardContent>
                </Box>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                      <TextAnimation gutterBottom variant="h4" text={`About ${groupName}`} />
                    <TextAnimation variant="body2" sx={{ pb: 3 }} text={description} />
                    <JoinGroupButton
                      groupName={groupName}
                      ContactArray={ContactArray}
                    />
                  </CardContent>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  image={image}
                  alt="image"
                />
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </>
  );
}

export default index;
