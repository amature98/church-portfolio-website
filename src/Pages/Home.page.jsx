import React from "react";
import Page from "./Page";
import Header from "../Components/Header/Header";
import HeaderBgimg from "../Images/bg1.jpg";
import AboutSection from "../Components/Header/AboutSection";
import LocationsSections from "../Components/Header/Locations";
import GetInvolved from "../Components/Header/GetInvolved";
import Carousel from "../Components/Carousel/Carousel";
import { events } from "../Components/Arrays/Arrays";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Page title="Home - PCEA MUKINYI PARISH">
        <Header
          title="PCEA Mukinyi Parish"
          headerText="Inspiring people to follow Jesus Christ in faith; a place where love abounds and hope fills up."
          height="100vh"
          bgimage={HeaderBgimg}
        />
        <AboutSection
          title="Welcome to PCEA Mukinyi Parish"
          aboutText={
            "Welcome to PCEA Mukinyi Parish, where faith meets community and hope sustains. We invite you to join us on a journey of spiritual growth and fellowship. Whether you're seeking solace, friendship, or a deeper connection with your faith, you'll find a warm embrace and open hearts here. Come as you are, and let's walk together in the light of God's love."
          }
          button="know more"
        />
        <GetInvolved />
        <LocationsSections
          title={"Our Church Gatherings"}
          subtitle={"Join us as we gather at one of our Mukinyi churches."}
        />
        <Box sx={{ mt: 2, mb: 4, textAlign: "center" }}>
          <Box>
            <Typography variant="h2">See what's happening</Typography>
            <Typography variant="body2" gutterBottom>
              Be upto date with these events and announcements.
            </Typography>
          </Box>
          <Carousel CarouselArray={events} />
        </Box>
      </Page>
    </>
  );
}

export default Home;
