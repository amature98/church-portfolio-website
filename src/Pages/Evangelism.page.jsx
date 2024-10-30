import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import { evangelismCarousel } from "../Components/Arrays/Images.array";
import bg from '../Images/evangelismbg.jpg'
import MsImg from '../Images/evangelismms.jpg'
import AbtImg from '../Images/evangelism1.jpg'

function EvangelismPage() {
  return (
    <>
      <GroupTemplate
        groupName="Evangelism"
        groupImage={bg}
        groupMotto="GO THEREFORE AND MAKE DISCIPLES OF ALL NATIONS (MATTHEW 28:19)"
        aboutDescription="The Evangelism Group at PCEA Mukinyi Parish is dedicated to sharing the love of Christ and spreading the message of salvation to all. We believe in the Great Commission given by Jesus in Matthew 28:19-20, which calls us to 'go and make disciples of all nations.' Our mission is to reach out to individuals and communities with the life-transforming message of hope and grace through Christ. We strive to embody the light of Jesus, creating a welcoming space for anyone seeking spiritual growth and renewal. Join us in fulfilling this purpose by participating in outreach programs, community events, and missions that bring the good news of Jesus to the world."
        aboutImage={AbtImg}
        ContactArray={[]}
        missionImage={MsImg}
        missionStatement="To proclaim the gospel of Jesus Christ with boldness and compassion, making disciples and nurturing faith in every heart."
        visionStatement="To be a beacon of hope, inspiring others to encounter Christ and embrace the joy of salvation."
        CarouselArray={evangelismCarousel}
      />
    </>
  );
}

export default EvangelismPage;
