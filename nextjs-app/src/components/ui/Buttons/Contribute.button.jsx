import React, { useState } from "react";

import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

import AnimatedButton from "./Animated.button";
import ContributeModal from "../Modals/Contribute.modal";

function ContributeBtn({ churchName, contributeInfoArray }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimatedButton
        onClick={handleOpen}
        endIcon={<VolunteerActivismRoundedIcon />}
      >
        give generously
      </AnimatedButton>
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
