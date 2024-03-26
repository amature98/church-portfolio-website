import React from 'react'
import Page from './Page'
import Header from '../Components/Header/Header'
import BgImage from '../Images/School.jpg'

function School() {
  return (
      <>
          <Page title='Mukinyi Presbyterian Academy'>
              <Header
                  title='Mukinyi Presbyterian Academy'
                  bgimage={BgImage}
              />
          </Page>
      </>
  )
}

export default School