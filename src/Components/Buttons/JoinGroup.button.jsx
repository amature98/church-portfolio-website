import { Button } from "@mui/material";
import React, { useState } from "react";
import JoinGroupModal from "../Modals/JoinGroup.modal";

function JoinGroupButton({ groupName, ContactArray }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        join group
      </Button>
      <JoinGroupModal
        open={open}
        onClose={handleClose}
        groupName={groupName}
        ContactArray={ContactArray}
      />
    </>
  );
}

export default JoinGroupButton;
