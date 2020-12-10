// import React from 'react'
import React, {Component, useState } from 'react'
import Trail from './Trail'
import {Link} from 'react-router-dom'
import ResponsiveDrawer from './ResponsiveDrawer'

function Home() {
    const [open, set] = useState(true)
    return (
        <>
    
  {/* <Trail open={open} onClick={() => set((state) => !state)}>
    <span>Welcome to portfollio</span>
    <span>This is Umme Hafsa Sadeqeen</span>
  
  </Trail> */}
           <ResponsiveDrawer/> 
        </>
    )
}

export default Home
