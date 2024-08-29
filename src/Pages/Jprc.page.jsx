import React from "react";
import GroupTemplate from "../Components/Template/Group.template";

function JprcPage() {
  return (
    <>
      <GroupTemplate
        groupName="JPRC"
        groupImage=""
        groupMotto={`"FRUITFUL SERVICE WITH HUMILITY AND SERVANTHOOD" (MATTHEW 7:18)`}
        aboutDescription={`JPRC’s establishment and mission are guided by key scriptures that emphasize the promotion and advocacy of justice, peace, reconciliation, and the recognition of humanity's role as co-workers in God's creation.
          It was created to address issues that require the church's engagement with both State and Non-State Actors, providing critical input for the welfare of its members and the broader society.
          The group's purpose is to educate members on the state of the nation and to encourage active involvement through training and public participation, empowering them to be informed citizens who understand their rights and responsibilities.`}
        aboutImage={null}
        ContactArray={[]}
        missionImage=""
        missionStatement="To honor and glorify God by actively advancing His Kingdom, dedicating ourselves to His service, and faithfully spreading His message of love, grace, and salvation to all corners of the world."
        visionStatement="To create a just and caring society based on Christian and Godly Values"
        CarouselArray={[]}
      />
    </>
  );
}

export default JprcPage;
