import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import AboutImg from "../Images/pcmf.jpg";
import MsImg from '../Images/pcmf2.jpg'
import BgImg from '../Images/pcmf4.jpg'

function PcmfPage() {
  return (
    <>
      <GroupTemplate
        groupName="PCMF"
        groupImage={BgImg}
        groupMotto="'NEVER LACKING IN ZEAL, BE FERVENT IN SPIRIT, SERVING THE LORD WITH A HEART FULL OF DEVOTION.' (ROMANS 12:11)."
        aboutDescription={`The Presbyterian Church Men’s Fellowship (PCMF) is a vibrant and dynamic group within PCEA Mukinyi Parish that calls to attract, lead, and develop men to Christ.
          Membership in the Presbyterian Church Men's Fellowship (PCMF) is extended to all male congregants who have experienced spiritual rebirth through being born again. This inclusive fellowship welcomes men of all ages, with a particular focus on young men between the ages of 18 and 35. 
          The journey to becoming a full member of the PCMF involves three essential and sequential steps: Admission, Dedication, and Commissioning.`}
        aboutImage={AboutImg}
        missionImage={MsImg}
        missionStatement="To be a united and powerful force of men, deeply rooted in faith, committed to bearing witness, and dedicated to serving Jesus Christ in all aspects of life."
        visionStatement="The men fellowship aims for the spiritual maturity and service of men and boys to the Glory of God."
        CarouselArray={[]}
        ContactArray={[]}
      />
    </>
  );
}

export default PcmfPage;
