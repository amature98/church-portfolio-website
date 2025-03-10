import React, { useState } from "react";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AnimatedButton from "./Animated.button";
import JoinChurchModal from "../Modals/Joinchurch.modal";

function JoinChurchButton({ churchName, ContactArray }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <AnimatedButton
        onClick={handleOpen}
        endIcon={<LocationOnRoundedIcon fontSize="large" />}
      >
        join us today
      </AnimatedButton>
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
