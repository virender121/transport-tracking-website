import React from 'react'
import './NewSubscriber.css'
import Footer from '../Footer/Footer';
const countries = [

    
  ];
const NewSubscriber = () => {
  return (
    <div >
      
         <div className='newsub'></div>       
  <div className='background'>
      <div className='card2 flex-column'>
      <h3 className='heading_sub'>Get your free account now!</h3>
      <form >
    
            
                    <input className='input_card' type="text" name="comany" placeholder='Company Name' required />
                    <input className='input_card' type="text"  name="name" placeholder=" Your Name" required/>
                    <input  className='input_card' type="email" name="email" placeholder="Your Email" required/>
                    <input  className='input_card' type="number" name="phone_number" placeholder="Phone Number" required/>    
                    <input  className='input_card' type="password" name="password" placeholder="Password" required/>
                    <input  className='input_card' type="text"  name="country" placeholder="Your Country" /><br />
                    <input  className='input_card' type="text" name="state" placeholder="Your State" /><br />
                <hr/>
               
               <div className="form-group za-tos-container" style={{display: 'block'}}>
            <span className='flex'>   <input className="tos-checkbox" type="checkbox" id="tos" name="tos" value="true" tabIndex="8"/>
  <label htmlFor="tos" className="tos-label">
    I agree to the <a id="terms-link" href="https://www.zoho.in/terms.html" rel="noopener noreferrer" target="_blank">Terms of Service</a> and <a href="https://www.zoho.in/privacy.html" id="privacy-link" rel="noopener noreferrer" target="_blank">Privacy Policy</a>.
  </label>
  </span>
</div>

                <button className='bton' type="submit">Sign Up For Free</button>
                
            </form>
            </div>
            </div>
            <Footer/>
    </div>
  )
}

export default NewSubscriber


