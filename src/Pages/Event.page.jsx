import React from 'react'
import { useParams } from 'react-router-dom'
import { events } from '../Components/Arrays/Arrays'
import { Box, Typography } from '@mui/material'
import Header from '../Components/Header/Header'

function EventPage() {
    const { id } = useParams()
    const event = events.find(event => event.id === id)
    if (!event) {
        return <Box> Event not found </Box>
    }
  return (
      <>
          <Header bgimage={event.image} title={event.title} />
          <Box>
              <Typography variant='h6'>When:</Typography>
              <Typography variant='body2'> {event.frequency}: {event.date} from {event.startTime} to {event.endTime}</Typography>
              <Typography variant='h6'>Where:</Typography>
              <Typography variant='body2'> {event.location} </Typography>
          </Box>
      </>
  )
}

export default EventPage