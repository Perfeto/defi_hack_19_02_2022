import '../styles/globals.css'

import React from 'react'

function App(props) {
  const {Component, pageProps, router} = props

  return (
      <>
        <Component {...pageProps} key={router.route}/>
      </>
  )
}

export default App
