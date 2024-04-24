import React from 'react'
import './About.css'

import revImg from './../../public/Snapchat-1230045186.jpg'

export const Review = () => {
  return (
    <div className='reviewMainContaier'>
     <div className='reviewContaier'>
      <div>
       <div className='reviewerInfo'>
        <h5>Saeed Achiever</h5>
        <h6>Web developer</h6>
       </div>
       
       <p className='text'>
        Exercitation fugiat ullamco quis 
        nostrud nulla et nisi laborum ad 
        deserunt. Esse qui id dolore laborum 
        aute do ullamco occaecat ad est nisi 
        incididunt. Consectetur non sit irure 
        enim occaecat est eu aute laboris ad 
        anim ex aliqua et. Sunt incididunt ut 
        anim est dolore labore. Quis do eu 
       </p>
      </div>

      <div className='revImgContainer'>
       <img src={revImg}/>
       <img src={revImg}/>
       <img src={revImg}/>
       <img src={revImg}/>
      </div>

      <div className='reviewPag'>
       <p>. . . .</p>
        
        
      </div>
     </div>
     
    </div>
  )
}
