import React from "react";
import Template from "../Components/Template/Church.template";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/mukinyi.jpg";
import {
  mukinyiAccInfo,
  mukinyiCarousel,
  mukinyiContacts,
  mukinyiServiceArray,
} from "../Components/Arrays/Arrays";

function Mukinyi() {
  const pageTitle = "Mukinyi Church | PCEA MUKINYI PARISH";
  const headerTitle = "PCEA Mukinyi Church";
  const headerText = "'...My house shall be called a house of prayer for all nations...' Mark 11:17";
  const churchDescription = "At P.C.E.A Mukinyi Church, we believe that the Great Commission is our mandate as the church of Jesus Christ. We create a platform that allows members to express the diverse gifts apportioned by God. We encourage each other to grow toward Jesus Christ and make it our mission to reach out to the lost and lonely.";

  return (
    <Page title={pageTitle}>
      <Header
        title={headerTitle}
        headerText={headerText}
        bgimage={BgImage}
        height="80dvh"
      />
      <Template
        churchName="Mukinyi Church"
        text={churchDescription}
        serviceArray={mukinyiServiceArray}
        ContactArray={mukinyiContacts}
        contributeInfoArray={mukinyiAccInfo}
        CarouselArray={[]}
      />
    </Page>
  );
}

export default Mukinyi;
