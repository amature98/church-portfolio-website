import React, { useState } from "react";
import { Button } from "@mui/material";
import JoinChurchModal from "../Modals/Joinchurch.modal";

function JoinChurchButton({ churchName, ContactArray }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: (theme) => theme.palette.text.secondary,
          background: (theme) => theme.palette.secondary.main,
          paddingX: 2,
        }}
      >
        join us today
      </Button>
      <JoinChurchModal
        open={open}
        onClose={handleClose}
        churchName={churchName}
        ContactArray={ContactArray}
      />
    </>
  );
}

export default JoinChurchButton;
