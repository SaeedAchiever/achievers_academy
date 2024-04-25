import React,{useState, useRef} from 'react'
import './HomeStyle.css'

import emailjs  from  '@emailjs/browser'


function Landing() {

  const form  = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ljdzcd8', 'template_vyqt0ai', form.current, {
        publicKey: 'J-x5rvf886lZorxIC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div className='landingMainContainer'>
     <div className='landingContainer'>
      <p>Start your career in Software Engineering</p>
      <ul>
              <li>Learn in-demand tech skills that companies are hiring for</li>
              <li>Get practical experience by working on projects and building a portfolio</li>
              <li>Get connected to jobs and start earning</li>
              <li>Learn in-demand tech skills that companies are hiring for</li>
            </ul>

            <div className='landingButtonContainer'>
              <button  onClick={togglePopup}>Enrol Your School</button>
            </div>
     </div>

     <div>
      {isOpen && (
        <div className="popup">

          <button onClick={togglePopup} className='close'> X </button>
          
          <div className="popup-content">
            <h3>Submit the form below to get started</h3>
            
            <form ref={form} onSubmit={sendEmail}>

              <input  type='text' placeholder='Full Name *' name='from_name' required/>


              <input  type='text'placeholder='School *' name='from_school' required/>

              <input  type='text'placeholder='Loaction *' name='from_location' required/>


              <input  type='email'placeholder='Email' name='from_email'/>
              
              <input  type='number'placeholder='Phone Number *'  name='from_phone' required/>

              
              <input  type='text' placeholder='I am a e.g Student'  name='from_personality'/>


              <textarea placeholder='Enter Addtional Info Here...'  name='message'>

              </textarea>


              <button type='submit'>Submit</button>


            </form>
          </div>
        </div>
      )}
    </div>
      

    </div>
  )
}

export default Landing