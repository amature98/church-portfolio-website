import React from "react";
import Template from "../Components/Template/Church.template";
import Page from "./Page";
import Header from "../Components/Header/Header";
import Leadership from "../Components/Components/Leadership";

import Image1 from "../Images/elder1.jpg";
import Image2 from "../Images/elder2.jpg";
import Image3 from "../Images/elder3.jpg";
import BgImage from "../Images/church4.jpg";
import Image from "../Images/elder2.jpg";

import {
  highwayAccInfo,
  highwayContacts,
  highwayServiceArray,
  mukinyiCarousel,
} from "../Components/Arrays/Arrays";
function Highway() {
  return (
    <Page title="Highway Church - PCEA MUKINYI PARISH">
      <Header
        title="PCEA Highway Church"
        headerText="We're glad to have you!"
			  bgimage={BgImage}
			  height={'80dvh'}
      />
      <Template
        churchName="Highway Church"
        text='"At P.C.E.A Highway Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
        image={Image}
        cardHeader="Elder Kanyi"
        cardTitle="Highway LCC Chairperson"
        serviceArray={highwayServiceArray}
        ContactArray={highwayContacts}
        contributeInfoArray={highwayAccInfo}
        CarouselArray={mukinyiCarousel}
      /> 
    </Page>
  );
}

export default Highway;
