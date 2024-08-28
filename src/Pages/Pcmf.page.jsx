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
           Membership in the Presbyterian Church Men's Fellowship (PCMF) is extended to all male congregants who have experienced spiritual rebirth through being born again. This inclusive fellowship welcomes men of all ages, with a particular focus on young men between the ages of 18 and 35. The journey to becoming a full member of the PCMF involves three essential and sequential steps: Admission, Dedication, and Commissioning.
           The PCMF is steadfast in its mission to foster spiritual growth, encourage active service, and promote meaningful fellowship among its members. Through this unwavering commitment, the fellowship aspires to transform the lives of men by guiding them in their walk with Jesus Christ. By doing so, the PCMF not only strengthens the spiritual fabric of its members but also aims to create a united and impactful force that contributes positively to the life of the church, the broader community, and the nation as a whole.`}
        aboutImage={null}
        missionImage={null}
        missionStatement="To be united force of  men in faith ,witness and service of Jesus Christ."
        visionStatement="To be spiritually mature and serve men and boys to the Glory of God."
        CarouselArray={[]}
        ContactArray={[]}
      />
    </>
  );
}

export default PcmfPage;
