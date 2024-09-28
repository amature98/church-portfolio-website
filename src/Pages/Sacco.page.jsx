import React from "react";
import Page from "./Page";
import GroupTemplate from "../Components/Template/Group.template";
import BgImage from "../Images/sacco.jpg";
import { contacts } from "../Components/Arrays/Arrays";

function Sacco() {
  return (
    <>
      <GroupTemplate
        groupName="Mukinyi Presbyterian Sacco"
        groupImage={BgImage}
        groupMotto=""
        aboutDescription="Welcome to Mukinyi Presbyterian Sacco, where faith meets financial empowerment! As a community-driven financial institution, we are committed to uplifting the economic well-being of our members. We offer a range of tailored savings and investment options designed to help you achieve your dreams, secure your future, and make meaningful financial progress. Our SACCO is more than just a place to save and borrow; it’s a family that believes in responsible stewardship and values-based financial growth. Whether you’re looking to grow your business, finance your child’s education, build your dream home, or simply secure your financial future, we are here to walk the journey with you. Rooted in Christian values, we prioritize transparency, integrity, and mutual support, ensuring every step you take is guided by principles that reflect our shared faith. Join us today and be part of a growing community where your financial success is our shared mission."
        aboutImage={null}
        missionStatement="To nurture a financially empowered community through innovative savings, affordable loans, and investment opportunities, while upholding the values of trust, excellence, and faith."
        missionImage={null}
        visionStatement="To be a leading, values-driven SACCO transforming lives and communities through economic empowerment."
        CarouselArray={[]}
        ContactArray={contacts.filter((contact) => contact.title === "sacco")}
      />
    </>
  );
}

export default Sacco;
