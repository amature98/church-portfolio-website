import React from "react";
import Page from "../../Pages/Page";
import Header from "../Header/Header";

function GroupTemplate({ groupName, groupImage, groupMotto }) {
  return (
    <>
      <Page title={`${groupName} - PCEA Mukinyi Parish`}>
        <Header
          height="70vh"
          title={groupName}
          headerText={groupMotto}
          bgimage={groupImage}
        />
        
      </Page>
    </>
  );
}

export default GroupTemplate;
