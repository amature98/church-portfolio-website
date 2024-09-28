import React from "react";
import Page from "./Page";
import Header from "../Components/Header/Header";
import BgImage from "../Images/ropes.jpg";
import GroupTemplate from "../Components/Template/Group.template";

function RopesPage() {
  return (
    <>
      <GroupTemplate
        groupName="R.O.P.E.S"
        groupImage={BgImage}
        groupMotto="TRANSFORMING INTO MATURITY CHRIST"
        aboutDescription="ROPES, which stands for Rites of Passage Experiences, is a comprehensive program specifically designed to guide young boys and girls through the significant transition from childhood to young adulthood. The program culminates in a week-long camp that provides a structured environment where participants are equipped with essential life skills, values, and knowledge to aid their development."
        missionStatement='"To create impactful experiences that support the holistic development of young individuals, preparing them to face the future with wisdom, strength, and community support."'
              visionStatement='"Empowering young minds to navigate the transition to adulthood with purpose, confidence, and Christian values."'
              aboutImage={null}
              missionImage={null}
              CarouselArray={[]}
      />
    </>
  );
}

export default RopesPage;
