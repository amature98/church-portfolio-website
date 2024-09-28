// Import Componenets needed
import React from "react";
import Header from "../Components/Header/Header";
import Page from "./Page";
import BgImage from "../Images/districts.jpg";
import GoogleMaps from "../Components/Components/GoogleMaps";
import DistrictTable from "../Components/Components/DistrictTable";
// Array with the list of Districts
import { DistrictArray } from "../Components/Arrays/Districts.array";

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
