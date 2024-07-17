import React from "react";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Form({ title, options, buttonLabel, buttonOnClick }) {
  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Typography variant="h4"> {title} </Typography>
        <TextField
          required
          id="name"
          label="Your Name"
          variant="standard"
          size="small"
          fullWidth
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id="phone-number"
          label="Phone Number"
          variant="standard"
          fullWidth
          size="small"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PhoneIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id="email"
          label="Email Address"
          variant="standard"
          fullWidth
          size="small"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id="status"
          label="Are you a first time visitor"
          variant="standard"
          fullWidth
          select
          size="small"
          margin="dense"
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {buttonLabel && buttonOnClick && (
          <Button
            variant="contained"
            onClick={buttonOnClick}
            sx={{
              my: 2,
              background: (theme) => theme.palette.secondary.main,
            }}
          >
            {buttonLabel}
          </Button>
        )}
      </Box>
    </>
  );
}

export default Form;
