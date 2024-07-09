import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import { contacts, youthCarousel } from "../Components/Arrays/Arrays";

function WomensPage() {
  return (
    <>
      <GroupTemplate
        groupName="Mukinyi Woman's Guild"
        groupImage={""}
        groupMotto=""
        aboutDescription=""
        missionStatement=""
        visionStatement=""
        aboutImage=""
        missionImage={""}
        CarouselArray={youthCarousel}
        ContactArray={contacts.filter((contact) => contact.title === "guild")}
      />
    </>
  );
}

export default WomensPage;
