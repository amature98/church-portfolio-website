import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import GroupImage from "../Images/youth.jpg";
import AboutImage from "../Images/yf-about.jpg";
import MsImage from "../Images/yf-img.jpg";
import { contacts, youthCarousel } from "../Components/Arrays/Arrays";

function YouthPage() {
  return (
    <>
      <GroupTemplate
        groupName="Mukinyi Youth Fellowship"
        groupImage={GroupImage}
        groupMotto='"Living for the LORD"'
        aboutDescription="Mukinyi Youth Fellowship represents an exciting avenue for the vibrant and dynamic youth community within Mukinyi Parish. Established with a heartfelt desire to cultivate a spirited fellowship environment, this youth ministry serves as a cornerstone for individuals between the ages 13 and 35 to come together, forge meaningful connections, and embark on a journey of personal and spiritual growth."
        missionStatement="Empowering the youth to discover their purpose, cultivate spiritual growth, and make a positive impact in their communities through fellowship, service, and leadership development."
        visionStatement="To serve God through service to the youth, to the Church and to the community and uniting young Christians and strengthen one another in our commitment to Jesus Christ and His Church."
        aboutImage={AboutImage}
        missionImage={MsImage}
        CarouselArray={youthCarousel}
        ContactArray={contacts.filter(
          (contact) => contact.tile === "youth"
        )}
      />
    </>
  );
}

export default YouthPage;
