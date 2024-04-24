import React from 'react'
import './HomeStyle.css'

import { Link } from 'react-router-dom';

import logo from '../../public/logo.png';
import Courses from './Courses';


function Header() {

  function showMenu(){
    let linksContainer  = document.getElementById('linksContainer')
    linksContainer.classList.toggle('show')
  }

  function hideMenu(){
    let linksContainer  = document.getElementById('linksContainer')
    linksContainer.classList.remove('show')
  }

  return (
    <div className='headerMainContainer'>

     <div className='logoContainer'>
      <div className='logoImageContainer'>
       <a href='#'>
        <img src={logo}/>
       </a>
      </div>
      <marquee>
       <a href='#'>
        <span className='textLogoI'>Achi</span>
        <span className='textLogoII'>vers </span>

        <span className='textLogoI'>Aca</span>
        <span className='textLogoII'>demy</span>
         
        
       </a>
      </marquee>
     </div>

     <div className='linksMainContainer'>
      <div>
       <button  onClick={showMenu}>Menu</button>
      </div>

      

     </div>

     <div className='linksContainer'  id='linksContainer'>
      <div className='close-btnContainer'>
       <button  onClick={hideMenu}>Close</button>
      </div>
        <ul>
          <li><a  href='#'>Home</a></li>
          <li><a  href='#'>Courses</a></li>
          <li><a  href='#'>About Us</a></li>
          <li><a  href='#'>Contact</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Header