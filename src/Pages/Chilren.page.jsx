import React from "react";
import GroupTemplate from "../Components/Template/Group.template";

function ChilrenPage() {
  return (
    <>
      <GroupTemplate
        groupName="Children's Ministry"
        groupImage={null}
        groupMotto=""
        aboutDescription={`This department is entrusted with the vital responsibility of imparting the Christian faith to the younger generation. It is structured around two fundamental pillars: Sunday School and Brigade, which are designed to nurture the spiritual growth of both boys and girls.
Over the years, the department has made significant efforts to actively engage all relevant stakeholders, fostering a strong sense of unity and cooperation between its two primary pillars.`}
        aboutImage={null}
        ContactArray={[]}
        missionStatement="To provide holistic Christian instruction, training, and capacity building for all children and their mentors in order to accept Christ as their savior, equip them to understand their Christian faith and apply it in their lives."
        missionImage={null}
        visionStatement="To teach, and make visible to all children the Love of God and their holistic identity to Christ and their relationship to others."
        CarouselArray={[]}
      />
    </>
  );
}

export default ChilrenPage;
