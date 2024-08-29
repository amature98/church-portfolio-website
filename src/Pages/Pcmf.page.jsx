import React from "react";
import GroupTemplate from "../Components/Template/Group.template";

function PcmfPage() {
  return (
    <>
      <GroupTemplate
        groupName="PCMF"
        groupImage={null}
        groupMotto="'Never lacking in zeal, be fervent in spirit, serving the Lord with a heart full of devotion.' (Romans 12:11)."
        aboutDescription={`The Presbyterian Church Men’s Fellowship (PCMF) is a vibrant and dynamic group within PCEA Mukinyi Parish that calls to attract, lead, and develop men to Christ.
          Membership in the Presbyterian Church Men's Fellowship (PCMF) is extended to all male congregants who have experienced spiritual rebirth through being born again. This inclusive fellowship welcomes men of all ages, with a particular focus on young men between the ages of 18 and 35. 
          The journey to becoming a full member of the PCMF involves three essential and sequential steps: Admission, Dedication, and Commissioning.`}
        aboutImage={null}
        missionImage={null}
        missionStatement="To be united force of  men in faith, witness and service of Jesus Christ."
        visionStatement="The men fellowship aims for the spiritual maturity and service of men and boys to the Glory of God."
        CarouselArray={[]}
        ContactArray={[]}
      />
    </>
  );
}

export default PcmfPage;
