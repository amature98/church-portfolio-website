import React from "react";
import GroupTemplate from "../Components/Template/Group.template";
import BgImg from "../Images/health.jpeg";

function HealthBoardPage() {
  return (
    <>
      <GroupTemplate groupName="Health Board" groupImage={BgImg} />
    </>
  );
}

export default HealthBoardPage;
