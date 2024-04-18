import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import JoinGroupButton from "../Buttons/JoinGroup.button";

function index({ groupName, description, image, direction }) {
  return (
    <>
      <Card sx={{ display: "flex" }}>
        {direction === "left" ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5">{groupName}</Typography>
                <Typography variant="body2"> {description} </Typography>
                <JoinGroupButton groupName={groupName} />
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={image}
              alt="image"
            />
          </>
        ) : (
          <>
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={image}
              alt="image"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h5">{groupName}</Typography>
                <Typography variant="body2"> {description} </Typography>
                <JoinGroupButton groupName={groupName} />
              </CardContent>
            </Box>
          </>
        )}
      </Card>
    </>
  );
}

export default index;
