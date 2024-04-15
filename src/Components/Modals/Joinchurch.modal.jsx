import React from "react";
import Form from "./Form";
import LeftContent from "./LeftContent";
import TemplateModal from "./Template.modal";
function JoinChurchModal({ open, onClose, churchName, ContactArray }) {
  return (
    <TemplateModal
      open={open}
      onClose={onClose}
      leftContent={
        <LeftContent
          title={`Join our ${churchName} family`}
          subTitle="We are glad you are here"
          text="Reach out to us."
          array={ContactArray}
        />
      }
      rightContent={
        <Form
          title="Let's get to know you"
          options={["Yes", "No"]}
          buttonLabel="Join"
          buttonOnClick={() => console.log("Button clicked")}
        />
      }
    />
  );
}

export default JoinChurchModal;
