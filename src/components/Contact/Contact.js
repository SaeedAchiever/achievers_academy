import React from 'react'
import './Contact.css'
import Courses from '../Homepage/Courses'

const Contact = () => {
  return (
    <>
     <div className='contactMainContainer'>
      <div className='contactHead'>
       <h2>Talk to the achiever team</h2>
      </div>
      <div className='contactBody'>
       <div className='contactSubBody'>
        <p className='contactHeaderTitle'>Phone</p>
        <p className='contactHeaderInfo'>+233596116171</p>
       </div>
       <div className='contactSubBody'>
        <p className='contactHeaderTitle'>email</p>
        <p className='contactHeaderInfo'>info@africoder.com</p>
       </div>
       <div className='contactSubBody'>
        <p className='contactHeaderTitle'>Whatsapp</p>
        <p className='contactHeaderInfo'><a href='#'>Connect Now</a></p>
       </div>
       <div className='contactSubBody'>
       <p className='contactHeaderTitle'>Telegram</p>
        <p className='contactHeaderInfo'><a href='#'>Live Chat</a></p>
       </div>
      </div>
     </div>


     <Courses />
    </>
  )
}

export default Contact