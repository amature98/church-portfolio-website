import React from 'react'
import Page from './Page'
import Header from '../Components/Header/Header'
import EventContainer from '../Components/Events/Container'
import BgImage from '../Images/events.jpg'

function Events() {
  return (
      <>
          <Page title='Events - PCEA Mukinyi Parish'>
              <Header
                  height='70vh'
                  title='Events'
                  textAlign='center'
                  bgimage={BgImage}
                  headerText='Find events you can be part of.'
              />
              <EventContainer />
          </Page></>
  )
}

export default Events