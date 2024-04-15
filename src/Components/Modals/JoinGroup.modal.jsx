import React from "react";
import TemplateModal from "./Template.modal";
import LeftContent from "./LeftContent";
import Form from "./Form";
groups = [
  "PCMF",
  "Womans Guild",
  "Children's Ministry",
  "Youth Fellowship",
  "Evangelism",
  "Christian Education",
  "Health Board",
];
function JoinGroupModal({ open, onClose, groupName, ContactArray }) {
  return (
    <>
      <TemplateModal
        open={open}
        onClose={onClose}
        leftContent={
          <LeftContent
            title={`Join our ${groupName} ministry today`}
            subTitle="We are so much glad that you would like to join our ministry"
            text="Reach out to us for enquiries"
            array={ContactArray}
          />
        }
        rightContent={
          <Form
            title="We want to know you"
            options={groups}
            buttonLabel="Join Us"
            buttonOnClick={() => console.log("Button Clicked")}
          />
        }
      />
    </>
  );
}

export default JoinGroupModal;
