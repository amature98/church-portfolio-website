import React from "react";
import Template from "../Components/Template/Church.template";
import Page from "./Page";
import Header from "../Components/Header/Header";
import Image from "../Images/elder2.jpg";
import Leadership from "../Components/Components/Leadership";

// Import images
import Image1 from "../Images/elder1.jpg";
import Image2 from "../Images/elder2.jpg";
import Image3 from "../Images/elder3.jpg";
import BgImage from "../Images/church3.jpg";

import {
  bhcContacts,
  bhcServiceArray,
  mukinyiCarousel,
} from "../Components/Arrays/Arrays";
function BHC() {
  return (
    <Page title="Blessed Hope Church|PCEA MUKINYI PARISH">
      <Header
        title="PCEA Blessed Hope Church"
        headerText="We're glad to have you!"
        bgimage={BgImage}
        height={"80dvh"}
      />
      <Template
        churchName="Blessed Hope Church"
        text='"At P.C.E.A Blessed Hope Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
        image={Image}
        cardHeader="Elder Joseph Mugweru"
        cardTitle="Mukinyi LCC Chairperson"
        serviceArray={bhcServiceArray}
        ContactArray={bhcContacts}
        contributeInfoArray={bhcServiceArray}
        CarouselArray={mukinyiCarousel}
      />
    </Page>
  );
}

export default BHC;
