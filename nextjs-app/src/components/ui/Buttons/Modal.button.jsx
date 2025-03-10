import { Button } from "@mui/material";
import React, { useState } from "react";

function ModalButton({ buttonText, modalContent, modalProps }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          paddingX: 2,
          background: (theme) => theme.palette.secondary.light,
        }}
      >
        {buttonText}
      </Button>
      {modalContent}
    </>
  );
}

export default ModalButton;
