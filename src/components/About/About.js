import React from 'react'
import './About.css'

import AboutImg from '../../public/graduates.jpg'
import { Review } from './Review'

const About = () => {
  return (
    <>
     <div className='aboutMainContainer'>
      <div className='aboutContainer'>
       
       <div>
        <h1>Who are the achievers?</h1>

        <p>
         Dolore labore aliqua amet dolore minim 
         laboris excepteur qui consequat amet. 
         Aute mollit sunt commodo cupidatat eu 
         ad officia excepteur ullamco eu eiusmod 
         aliqua nostrud. Voluptate cillum enim 
         incididunt ullamco ipsum incididunt 
         cupidatat ipsum velit. Non exercitation 
         sunt deserunt do duis mollit cillum. 
         Culpa ad fugiat mollit labore sunt 
         incididunt minim duis non id qui 
         exercitation ullamco magna.
         Pariatur aliquip veniam aute labore do 
         do do do commodo deserunt in. Veniam 
         magna exercitation quis et sit laborum 
         est nostrud. Occaecat commodo ad dolor 
         ut in id mollit eiusmod. Sunt qui nulla 
         eu veniam ea veniam labore commodo voluptate est. Dolor excepteur incididunt nulla reprehenderit ad laborum cupidatat laborum cupidatat.
        </p>
       </div>

       <div className='aboutImage'>
        <img 
         src={AboutImg}

        />
       </div>
      </div>

      <div  className='misVisMainContainer'>
        <div className='misVisContainer'>
          <div>
            <h2>Mision</h2>
            <p>
              Commodo proident nisi mollit cupidatat ad 
              est occaecat est ex. Eu esse do adipisicing
              reprehenderit irure est. Voluptate occaecat 
              et eiusmod laboris officia nostrud tempor 
              voluptate.
            </p>
          </div>
          <div>
          <h2>Vision</h2>
            <p>
              Commodo proident nisi mollit cupidatat ad 
              est occaecat est ex. Eu esse do adipisicing
              reprehenderit irure est. Voluptate occaecat 
              et eiusmod laboris officia nostrud tempor 
              voluptate.
            </p>
          </div>
        </div>
      </div>
      
      <h1 className='reviewTitle'>What our students say</h1>
      
        <Review />

     </div>
    </>
  )
}

export default About