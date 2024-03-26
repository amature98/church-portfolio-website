import React from 'react'
import Page from './Page'
import Header from '../Components/Header/Header'
import BgImage from '../Images/sacco.jpg'

function Sacco() {
  return (
      <>
          <Page title='Mukinyi Presbyterian Sacco - PCEA Mukinyi Parish'>
              <Header
                  title='mukinyi presbyterian sacco'
                  bgimage={BgImage}
              />
          </Page>
      </>
  )
}

export default Sacco