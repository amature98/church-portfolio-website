import React from "react";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/church2.jpg";
import Template from "../Components/Template/Church.template";

import Image1 from "../Images/elder1.jpg";
import Image2 from "../Images/elder2.jpg";
import Image3 from "../Images/elder3.jpg";

// Import Arrays
import {
  neemaAccInfo,
  neemaContacts,
  neemaServiceArray,
  mukinyiCarousel,
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

function Neema() {
  return (
    <>
      <Page title="Neema Church|PCEA MUKINYI PARISH">
        <Header
          bgimage={BgImage}
          title="Welcome to Neema Church"
          headerText="'Neema ya Bwana Yesu Kristo na upendo wa Mungu na Umoja wa Roho Mtakatifu, viwe nanyi nyote' 2 Wakorintho 13:14"
          height={"80dvh"}
        />
        <Template
          image={Image}
          title="Neema LCC Leadership"
          churchName="Neema Church"
          text='"At the heart of P.C.E.A Neema Church lies a steadfast conviction: that the call of the great commission is our sacred responsibility as followers of Jesus Christ. Here, we foster an environment where every member can authentically manifest the unique gifts bestowed upon them by God. Together, we inspire and support one another in our pursuit of spiritual growth and closeness to Jesus Christ. Moreover, it is our collective mission to extend His love and grace to those who are searching and in need of solace."'
          serviceArray={neemaServiceArray}
          ContactArray={neemaContacts}
          contributeInfoArray={neemaAccInfo}
          CarouselArray={mukinyiCarousel}
          leadersArray={Leaders}
        />
      </Page>
    </>
  );
}

export default Neema;
