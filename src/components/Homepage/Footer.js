import React from 'react'
import './HomeStyle.css'

import logo from '../../public/logo.png';


function Footer() {
  return (
    <div className='footerMainContainer'>
     <div className='footerContainer'>
      <div>
        <img  src={logo}  className='footerLogo'/>
        <ul>
          <li><a  href=''>FAQ</a></li>
        </ul>

      </div>
      
      <div>
        <h3>Connect with us online</h3>
        <ul>
          <li><a href='#'>Whatsapp</a></li>
          <li><a href='#'>Telegram</a></li>
        </ul>
      </div>

     </div>
    </div>
  )
}

export default Footer