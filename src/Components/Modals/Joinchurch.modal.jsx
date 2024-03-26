import { Box, Stack, Typography } from "@mui/material";
import TemplateModal from "./Template.modal";
import React from "react";
import Form from "./Form";

function JoinChurchModal({ open, onClose, churchName, ContactArray }) {
  const LeftContent = () => (
    <>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">{`Join our ${churchName} family`}</Typography>
        <Typography gutterBottom variant="body2">
          We are glad you are here
        </Typography>
        <Typography gutterBottom variant="h4" sx={{ mt: 6 }}>
          Reach out to us
        </Typography>
        <Stack direction="column">
          {ContactArray.map((contact, index) => (
            <Typography key={index} gutterBottom variant="h6">
              {contact.type}: {contact.contact}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
  return (
    <TemplateModal
      open={open}
      onClose={onClose}
      leftContent={<LeftContent />}
      rightContent={<Form />}
    />
  );
}

export default JoinChurchModal;
