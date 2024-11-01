import React from "react";
import Template from "../Components/Template/Church.template";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/church3.jpg";
import { bhcContacts, bhcServiceArray, bhcContributeInfo, mukinyiCarousel } from "../Components/Arrays/Arrays";

function BHC() {
  return (
    <Page title="Blessed Hope Church | PCEA MUKINYI PARISH">
      <Header
        title="PCEA Blessed Hope Church"
        headerText="We're glad to have you!"
        bgimage={BgImage}
        height="80dvh"
      />
      <Template
        churchName="Blessed Hope Church"
        text={`At P.C.E.A Blessed Hope Church, we believe that the Great Commission is our mandate as the church of Jesus Christ. 
        We ensure that we create a platform that allows members to express the different graces apportioned to them by God. 
        We encourage each other to grow toward Jesus Christ and make it our mission to reach out to the lost and lonely.`}
        serviceArray={bhcServiceArray}
        ContactArray={bhcContacts}
        contributeInfoArray={bhcContributeInfo}
        CarouselArray={mukinyiCarousel}
      />
    </Page>
  );
}

export default BHC;
