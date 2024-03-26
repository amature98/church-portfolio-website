import React, { useState } from "react";
import { Button } from "@mui/material";
import ContributeModal from "../Modals/Contribute.modal";

function ContributeBtn({ churchName, contributeInfoArray }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          background: (theme) => theme.palette.secondary.light,
          paddingX: 2,
        }}
      >
        {" "}
        contribute
      </Button>
      <ContributeModal
        open={open}
        onClose={handleClose}
        churchName={churchName}
        contibuteInfoArray={contributeInfoArray}
      />
    </>
  );
}

export default ContributeBtn;
