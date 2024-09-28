import React from "react";
import BgImage from "../Images/School.jpg";
import GroupTemplate from "../Components/Template/Group.template";
import { contacts } from "../Components/Arrays/Arrays";

function School() {
  return (
    <>
      <GroupTemplate
        groupName="Mukinyi Presbyterian Academy"
        groupImage={BgImage}
        groupMotto="Motto Goes Here"
        aboutDescription="Welcome to Mukinyi Presbyterian Academy, a beacon of excellence and holistic development rooted in Christian values. Here, we nurture young minds, shaping them to become future leaders grounded in integrity, faith, and academic brilliance. Our school offers an environment where knowledge, character, and spiritual growth intersect, fostering a community where each student is known, valued, and inspired to reach their fullest potential. With a focus on both academic rigor and moral formation, we strive to cultivate responsible global citizens equipped to make a positive impact in society."
        aboutImage={null}
        missionStatement="To provide a Christ-centered education that integrates academic excellence, moral formation, and spiritual growth, equipping students with the values and skills needed for lifelong success and service."
        missionImage={null}
        visionStatement="To be a transformative Christian learning institution that inspires excellence, molds character, and equips young minds to serve and lead in a global community."
        CarouselArray={[]}
        ContactArray={contacts.filter((contact) => contact.title === "school")}
      />
    </>
  );
}

export default School;
