import React from "react";
import TemplateModal from "./Template.modal";
import { Box, Stack, Typography } from "@mui/material";

function ContributeModal({ open, onClose, churchName, contibuteInfoArray }) {
  const LeftContent = () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4"> {`${churchName} Giving`} </Typography>
      <Typography gutterBottom variant="body2" sx={{ my: 3 }}>
        Deuteronomy 16:17. Every man shall give as he is able, according to the
        blessing of the LORD your God which He has given you.
      </Typography>
    </Box>
  );
  const RightContent = () => (
    <Box>
      <Typography gutterBottom variant="h4">
        Modes of Giving
      </Typography>
      <Stack direction="column">
        {contibuteInfoArray.map((mode, index) => (
          <Typography
            key={index}
            gutterBottom
            variant="h6"
            sx={{ paddingY: 1 }}
          >
            {mode.type}: {mode.number}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
  return (
    <TemplateModal
      open={open}
      onClose={onClose}
      leftContent={<LeftContent />}
      rightContent={<RightContent />}
    />
  );
}

export default ContributeModal;
