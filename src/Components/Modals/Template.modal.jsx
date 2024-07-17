import {
  Backdrop,
  Box,
  Fade,
  Grid,
  IconButton,
  Modal,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
            width: "90dvw",
            maxWidth: 900,
            background: (theme) => theme.palette.background.default,
            borderRadius: 2.65,
            boxShadow: 24,
            outline: "none",
            overflow: "hidden",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 1,
                  right: 1,
                  backgroundColor: (theme) => theme.palette.background.default,
                  borderRadius: "50%",
                  boxShadow: 10,
                  zIndex: 10,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.error.light,
                  },
                }}
                color="primary"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>{leftContent}</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={24}
                sx={{
                  borderRadius: 2.5,
                  p: 4,
                  background: (theme) => theme.palette.primary.light,
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
