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
      <Box
        sx={{ color: (theme) => theme.palette.primary.dark }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4"> {title} </Typography>
        <TextField
          required
          id="name"
          label="Your Name"
          variant="standard"
          size="small"
          fullWidth
          sx={{ my: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonIcon />
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
          sx={{ my: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PhoneIcon />
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
          sx={{ my: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon />
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
          sx={{ my: 2 }}
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
