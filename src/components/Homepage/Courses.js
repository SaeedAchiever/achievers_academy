import React from 'react'
import './HomeStyle.css'

import logo from '../../public/download.jpg';
import logoTwo from '../../public/download (1).jpg';


function Courses() {
  return (
    <div className='coursesMainContainer'>

     <div className='coursesContainer'>
      <h2>Web development</h2>
      <div>
        <p className='courseTitle'>Do tempor nostrud enim doloreniam laboris est elit.</p>
        <img src={logo}
        />
        <p  className='courseText'>
         Incididunt ullamco proident occaecat occaecat proident esse ex dolor. Magna amet exercitation occaecat aliqua enim incididunt.
        </p>
      </div>
       <button>Learn more</button>
     </div>

     <div className='coursesContainer'>
      <h2>mobile app development</h2>
      <div>
        <p className='courseTitle'>Do tempor nostrud enim doloreniam laboris est elit.</p>
        <img src={logoTwo}
        />
        <p className='courseText'>
         Incididunt ullamco proident occaecat occaecat proident esse ex dolor. Magna amet exercitation occaecat aliqua enim incididunt.
        </p>
        <button>Learn more</button>
      </div>
     </div>
    </div>
  )
}

export default Courses