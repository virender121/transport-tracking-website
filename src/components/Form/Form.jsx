import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form'>
        <h1>Contact With Us</h1>
      <form >
        <div className='flex'>
        <input className='input' placeholder='Your Name*' /> 
        <input className='input' placeholder='E-mail*' /> 
        </div>
        <div className='flex'>
        <input className='input' placeholder='Your Phone' /> 
        <input className='input' placeholder='Your Subject' />
        </div>
        <textarea className='input' placeholder='Your Message' name='message' rows="5" cols="33"></textarea> 
        <button  className ='bton' type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Form
