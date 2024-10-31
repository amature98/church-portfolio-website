import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import { contacts } from "../Components/Arrays/Arrays";
import { guildCarousel } from "../Components/Arrays/Images.array";
import MsImg from '../Images/guildMs.jpg'
import BgImg from '../Images/guildBg.jpg'
import AbtImg from '../Images/guildAbt.jpg'

function WomensPage() {
  return (
    <>
      <GroupTemplate
        groupName="Woman's Guild"
        groupImage={BgImg}
        groupMotto="WHOM I AM IS WHO I SERVE"
        aboutDescription="The Woman's Guild is a vibrant fellowship that brings together women and girls, fostering a deep sense of community and unity as they commit their lives to following Jesus Christ. Through worship, meaningful fellowship, and dedicated service, members of the Woman’s Guild strengthen their faith, support one another, and work collectively to live out the teachings of Christ in their daily lives. This fellowship not only nurtures spiritual growth but also empowers women and girls to make a positive impact in their communities and beyond."
        missionStatement="To holistically empower Christian Women enabling them to effectively transform the society through worship, fellowship, networking, partnerships, advocacy, communication, mobilization of resources, research and training based on Christian values."
        visionStatement="To be an inclusive Christian Women’s organization that empowers women to transform society"
        aboutImage={AbtImg}
        missionImage={MsImg}
        CarouselArray={guildCarousel}
        ContactArray={contacts.filter((contact) => contact.title === "guild")}
      />
    </>
  );
}

export default WomensPage;
