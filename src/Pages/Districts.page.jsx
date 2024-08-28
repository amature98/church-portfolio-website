// Import components
import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Page from "./Page";
// Import Image
import BgImage from "../Images/districts.jpg";
// Import components
import GoogleMaps from "../Components/Components/GoogleMaps";
import DistrictTable from "../Components/Components/DistrictTable";
// Import District array
import { DistrictArray } from "../Components/Arrays/Arrays";

function District() {
  return (
    <>
      <Page title="Districts | PCEA Mukinyi Parish">
        <Header
          title="Mukinyi Parish Districts"
          headerText="Find the right community for you to grow your faith"
          height="75vh"
          bgimage={BgImage}
        />
        <DistrictTable DistrictArray={DistrictArray} />
        <GoogleMaps />
      </Page>
    </>
  );
}

export default District;
