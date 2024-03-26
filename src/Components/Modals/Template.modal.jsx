import { Backdrop, Box, Fade, Grid, Modal, Paper } from "@mui/material";
import React from "react";

function TemplateModal({ open, onClose, leftContent, rightContent }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: { timeout: 500 },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            background: "#f8f8ff",
            borderRadius: 6,
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {leftContent}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paper
                elevation={24}
                sx={{
                  borderRadius: 6,
                  p: 4,
                }}
              >
                {rightContent}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default TemplateModal;
