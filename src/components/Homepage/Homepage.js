import React from 'react'


import Header from './Header'
import Landing from './Landing'
import About from './About'
import SlidingCompo from './SlidingCompo'
import Courses from './Courses'
import Students from './Students'
import Population from './Population'
import Footer from './Footer'

function Homepage() {
  return (
    <div className='homepageContainer'>
      {/* <Header /> */}
      <Landing  />
      <About  />
      <SlidingCompo />
      <Courses  />
      <Population />
      <Students />
      {/* <Footer /> */}
    </div>
  )
}

export default Homepage