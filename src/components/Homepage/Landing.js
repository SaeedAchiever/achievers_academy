import React,{useState} from 'react'
import './HomeStyle.css'


function Landing() {

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
            
            <form>

              <input  type='text' placeholder='First Name *' required/>

              <input  type='text'placeholder='Last Name *'  required/>

              <input  type='text'placeholder='School *' required/>

              <input  type='text'placeholder='Loaction *' required/>


              <input  type='email'placeholder='Email'/>
              
              <input  type='telephone'placeholder='Phone Number *' required/>

              
              <select>
                <option>Am a... *</option>
                <option>Parent</option>
                <option>Student</option>
                <option>School Owner</option>
                <option>Other Staff</option>
                <option>Prefer Not To Say</option>
              </select>


              <textarea placeholder='Enter Addtional Info Here...'>

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