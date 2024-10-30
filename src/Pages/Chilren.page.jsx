import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import { childrenCarousel } from "../Components/Arrays/Images.array";
import GrpImg from '../Images/children.jpg'
import AbtImg from '../Images/childrenAbt.jpg'
import MsImg from '../Images/childrenMsImg.jpg'
function ChilrenPage() {
  return (
    <>
      <GroupTemplate
        groupName="Children's Ministry"
        groupImage={GrpImg}
        groupMotto="LET THE LITTLE CHILDREN COME TO ME (LUKE 18:16)"
        aboutDescription={`This department is entrusted with the vital responsibility of imparting the Christian faith to the younger generation. It is structured around two fundamental pillars: Sunday School and Brigade, which are designed to nurture the spiritual growth of both boys and girls.
Over the years, the department has made significant efforts to actively engage all relevant stakeholders, fostering a strong sense of unity and cooperation between its two primary pillars.`}
        aboutImage={AbtImg}
        ContactArray={[]}
        missionStatement="To provide holistic Christian instruction, training, and capacity building for all children and their mentors in order to accept Christ as their savior, equip them to understand their Christian faith and apply it in their lives."
        missionImage={MsImg}
        visionStatement="To teach, and make visible to all children the Love of God and their holistic identity to Christ and their relationship to others."
        CarouselArray={childrenCarousel}
      />
    </>
  );
}

export default ChilrenPage;
