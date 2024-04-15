import { Button } from "@mui/material";
import React, { useState } from "react";
import JoinGroupModal from "../Modals/JoinGroup.modal";
const [open, setOpen] = useState(false);
const handleOpen = setOpen(!open);
const handleClose = setOpen(open);

function JoinGroupButton({ groupName, ContactArray }) {
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: (theme) => theme.palette.text.secondary,
          backgroundColor: (theme) => theme.palette.secondary.main,
          paddingX: 2,
        }}
      >
        <JoinGroupModal
          open={open}
          onClose={handleClose}
          groupName={groupName}
          ContactArray={ContactArray}
        />
      </Button>
    </>
  );
}

export default JoinGroupButton;
