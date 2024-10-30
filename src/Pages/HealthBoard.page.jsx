import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import BgImg from "../Images/health.jpeg";
import MsImg from '../Images/health1.jpg'
import AbtImg from '../Images/health2.jpg'

function HealthBoardPage() {
  return (
    <>
      <GroupTemplate
        groupName="Health Board"
        groupImage={BgImg}
        groupMotto="AND BY HIS STRIPES WE ARE HEALED (ISAIAH 53:5)"
        aboutDescription={`The Health Board is a dedicated group within PCEA Mukinyi that focuses on promoting and maintaining the physical, mental, and spiritual well-being of both the members and the broader community. 
          Through education, support, and health initiatives, the Health Board seeks to address health-related concerns, encourage healthy lifestyles, and provide resources for individuals to achieve optimal health.
          The group also partners with healthcare professionals and organisations to offer screenings, workshops, and interventions that cater to the diverse health needs of the parish and its surrounding community, fostering a holistic approach to wellness that aligns with Christian principles.`}
        aboutImage={AbtImg}
        ContactArray={[]}
        missionImage={MsImg}
        missionStatement="To enhance the well-being of our church and community by promoting healthy lifestyles, providing access to essential health resources, and fostering a supportive environment where physical, mental, and spiritual health are nurtured in alignment with Christian values."
        visionStatement="To create a thriving community where every individual experiences holistic health, empowered by knowledge, support, and faith-driven initiatives, ensuring that the church and its members are well-equipped to lead lives of wellness and service."
        CarouselArray={[]}
      />
    </>
  );
}

export default HealthBoardPage;
