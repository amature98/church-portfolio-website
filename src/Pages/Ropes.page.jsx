import React from 'react'
import Page from './Page'
import Header from '../Components/Header/Header'
import BgImage from '../Images/ropes.jpg'

function RopesPage() {
  return (
      <>
          <Page title='R.O.P.E.S - PCEA Mukinyi Parish'>
              <Header
                  height='70vh'
                  textAlign='center'
                  title='R.O.P.E.S'
                  headerText='lorem ipsum is a dummy text form'
                  bgimage={BgImage}
              />
          </Page>
      </>
  )
}

export default RopesPage