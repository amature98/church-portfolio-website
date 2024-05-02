import React from 'react'
import {Box, Typography, Stack} from '@mui/material'

function LeftContent({title, subTitle, text, array}) {
  return (
    <>
      <Box sx={{ p: 3}}>
        <Typography variant="h4">{title}</Typography>
        <Typography gutterBottom variant="body2">
          {subTitle}
        </Typography>
        <Typography gutterBottom variant="h4" sx={{ mt: 6 }}>
          {text}
        </Typography>
        <Stack direction="column">
          {array.map((contact, index) => (
            <Typography key={index} gutterBottom variant="body2">
              {contact.type}: {contact.contact}
            </Typography>
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default LeftContent