import React from "react";
import TemplateModal from "./Template.modal";
import { Box, Stack, Typography } from "@mui/material";

function ContributeModal({ open, onClose, churchName, contibuteInfoArray }) {
  const LeftContent = () => (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4"> {`${churchName} Contibution`} </Typography>
      <Typography gutterBottom variant="body2" sx={{my: 3}}>
        {" "}
        Deuteronomy 16:17. Every man shall give as he is able, according to the
        blessing of the LORD your God which He has given you.{" "}
      </Typography>
    </Box>
    );
    const RightContent = () => (
        <Box>
            <Typography variant="h4">
                Modes of Payment
            </Typography>
            <Stack direction='column'>
                {contibuteInfoArray.map((mode, index) => (
                    <Typography key={index} gutterBottom variant="h6">
                        {mode.type}: {mode.number}
                    </Typography>
                ))}
            </Stack>
        </Box>
    )
  return (
    <TemplateModal
      open={open}
      onClose={onClose}
      leftContent={<LeftContent />}
    />
  );
}

export default ContributeModal;
