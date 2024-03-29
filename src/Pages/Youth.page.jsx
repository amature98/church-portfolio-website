import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import GroupImage from "../Images/youth.jpg";

function YouthPage() {
  return (
    <>
      <GroupTemplate
        groupName="Youth Fellowship"
        groupImage={GroupImage}
        groupMotto=""
      />
    </>
  );
}

export default YouthPage;
