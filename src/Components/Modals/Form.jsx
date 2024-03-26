import React from 'react'
import { Box, Button, InputAdornment, MenuItem, Paper, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Form() {
  return (
    <>
      <Box component='form' noValidate autoComplete='off'>
       
          <TextField
            required id='name'
            label='Your Name'
            variant='standard'
            size='small'
            fullWidth
            sx={{my:2}}
            InputProps={{
              endAdornment: <InputAdornment><PersonIcon /></InputAdornment>}}
          />
          <TextField
            required id='phone-number'
            label='Phone Number'
            variant='standard'
            fullWidth
            size='small'
            sx={{my: 2}}
            InputProps={{
              endAdornment: <InputAdornment><PhoneIcon /></InputAdornment>}}
          />
          <TextField
            required id='email'
            label='Email Address'
            variant='standard'
            fullWidth
            size='small'
            sx={{my: 2}}
            InputProps={{
              endAdornment: <InputAdornment><EmailIcon /></InputAdornment>}}
          />
          <TextField
            required id='status'
            label='Are you a first time visitor'
            variant='standard'
            fullWidth
            select
            size='small'
            sx={{ my: 2 }}>
            <MenuItem>Yes</MenuItem>
            <MenuItem>No</MenuItem>
          </TextField>
          <Button
            variant='contained'
            sx={{
              my:2,
							background: (theme) => theme.palette.secondary.light,
						}}>
            Join us
          </Button>
      </Box>
    </>
  )
}

export default Form