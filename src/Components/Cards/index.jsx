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

function index({
  groupName,
  ContactArray,
  direction,
  description,
  image,
  missionStatement,
  visionStatement
}) {
  return (
    <>
      <Card sx={{ display: "flex" }} raised>
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
                      <Typography gutterBottom variant="h4">
                        Mission
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        {missionStatement}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography gutterBottom variant="h4">
                        Vision
                      </Typography>
                      <Typography gutterBottom variant="body2">
                        {visionStatement}
                      </Typography>
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
                      <Typography gutterBottom variant="h4">About {groupName}</Typography>
                    <Typography variant="body2" sx={{pb: 3}}>
                      {description}
                    </Typography>
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
