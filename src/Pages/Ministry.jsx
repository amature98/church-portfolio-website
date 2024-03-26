import React from 'react'
import Page from './Page'
import Header from '../Components/Header/Header'
import BgImage from '../Images/ministry.jpg'

function Ministry() {
  return (
    <>
      <Page title='Join a Ministry - PCEA Mukinyi Parish' >
        <Header
          height='70vh'
          textAlign='center'
          title='Join a Ministry'
          headerText='“Let us consider one another in order to provoke love and good works, not neglecting to gather together, as some are in the habit of doing, but encouraging each other, and all the more as you see the day approaching.”
HEBREWS 10:24-25'
          bgimage={BgImage} />
      </Page>
    </>
  )
}

export default Ministry