import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { events } from '../Arrays/Arrays'
import { Link } from 'react-router-dom'

function index() {
  const [selectedLocation, setSelectedLocation] = useState('All')

  // Filter events based on selected location
  const filteredEvents = selectedLocation === 'All' ? events : events.filter(event => event.location === selectedLocation)
  return (
      <>
      <Box sx={{ px: 4, py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Filter dropdown for location */}
        <Select variant='standard' size='small' value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} sx={{ mb: 4 }}>
          <MenuItem value='All'>All Congregations</MenuItem>
          {[...new Set(events.map(event => event.location))].map((location, index) => (
            <MenuItem key={index} value={location}> {location} </MenuItem>
          ))}
        </Select>
        <Grid container spacing={4}>
          {filteredEvents.map((event, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} >
              <Card raised component={Link} to={`/events/${event.id}`}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='200'
                    image={event.image}
                    alt='img' />
                  <CardContent>
                    <Typography gutterBottom variant='h6'>
                      {event.title}
                    </Typography>
                    <Typography gutterBottom variant='body2'>
                      {event.frequency} on {event.date} from {event.startTime} to {event.endTime} at {event.location}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
              </Grid>
          </Box>
      </>
  )
}

export default index