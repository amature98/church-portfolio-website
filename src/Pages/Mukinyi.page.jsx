import React from "react";
import Template from "../Components/Template/Church.template";
import Page from "./Page";
import Header from "../Components/Header/Header";

import Leadership from "../Components/Components/Leadership";
import Carousel from "../Components/Carousel/Carousel";

// Import images
import Image1 from "../Images/elder1.jpg";
import Image2 from "../Images/elder2.jpg";
import Image3 from "../Images/elder3.jpg";
import BgImage from "../Images/mukinyi.jpg";

// Import Arrays
import {
  mukinyiAccInfo,
  mukinyiCarousel,
  mukinyiContacts,
  mukinyiServiceArray,
} from "../Components/Arrays/Arrays";
const Leaders = [
  {
    name: "Elder Paul Thairu",
    title: "Chairperson",
    image: Image1,
  },
  {
    name: "Elder Eustace Kiarie",
    title: "Registrar",
    image: Image2,
  },
  {
    name: "Mrs. ",
    title: "Treasurer",
    image: Image3,
  },
];
function Mukinyi() {
  return (
    <Page title="Mukinyi Church - PCEA MUKINYI PARISH">
      <Header
        title="PCEA Mukinyi Church"
        headerText="'...My house shall be called a house of prayer for all nations...' Mark 11:17"
        bgimage={BgImage}
      />
      <Template
        churchName="Mukinyi Church"
        text='"At P.C.E.A Mukinyi Church, we believe that the great commission is our mandate as the church of Jesus Christ and we ensure that we create a platform that allows members to express the different graces that have been apportioned to them by God. We encourage each other into growing towards Jesus Christ and make it our business to go out and show Him to the lost and lonely."'
        image={Image}
        serviceArray={mukinyiServiceArray}
        ContactArray={mukinyiContacts}
        contributeInfoArray={mukinyiAccInfo}
        leadersArray={Leaders}
        title="Mukinyi LCC Leadership"
        CarouselArray={mukinyiCarousel}
      />
    </Page>
  );
}

export default Mukinyi;
