import React from 'react'
import Router from './Routes'
import Themeconfig from './Themes'
import GlobalStyles from './Themes/Global.themes'

function App() {
  return (
    <>
      <Themeconfig>
        <GlobalStyles />
        <Router />
      </Themeconfig>
    </>
  )
}

export default App