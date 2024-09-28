import React from "react";
import Page from "./Page";
import { Button, Container, Typography } from "@mui/material";

function ErrorPage() {
  return (
    <>
      <Page title="ErrorPage">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            color="text.error"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Sorry you seem lost
          </Typography>
          <Button variant="contained" color="error" href="/home">
            Go Back Home
          </Button>
        </Container>
      </Page>
    </>
  );
}

export default ErrorPage;
