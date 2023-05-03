import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './NewSubscriber.css';

const countries = [
  "select",
  "australia",
  "india",
  "japan",
  "united state"
];

const NewSubscriber = () => {
return (
<div>
<div className='newsub'></div>
<div className='background'>
<Container className='card2 flex-column'>
<h3 className='heading_sub'>Get your free account now!</h3>
<Form>
<Form.Group controlId='formCompanyName' className='w-50 '>
<Form.Label>Company Name</Form.Label>
<Form.Control type='text' placeholder='Enter company name' required style={{ width: "100%" }} />
</Form.Group>
<Form.Group controlId='formName' className='w-50 '>
          <Form.Label>Your Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' required style={{ width: "100%" }} />
        </Form.Group>

        <Form.Group controlId='formEmail' className='w-50 '>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' required style={{ width: "100%" }} />
        </Form.Group>

        <Form.Group controlId='formPhoneNumber' className='w-50 '>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='number' placeholder='Enter phone number' required style={{ width: "100%" }} />
        </Form.Group>

        <Form.Group controlId='formPassword' className='w-50 '>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter password' required style={{ width: "100%" }} />
        </Form.Group>

        <Form.Group controlId='formCountry' className='w-50 '>
          <Form.Label>Your Country</Form.Label>
          <Form.Control as='select' defaultValue='' style={{ width: "100%" }}>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='formState'  className='w-50 ' >
          <Form.Label>Your State</Form.Label>
          <Form.Control type='text' placeholder='Enter state'  />
        </Form.Group>

        <hr />

        <Form.Group controlId='formCheckbox'>
          <Form.Check
            type='checkbox'
            label={
              <>
                I agree to the{' '}
                <a href='https://www.zoho.in/terms.html' target='_blank' rel='noopener noreferrer'>
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href='https://www.zoho.in/privacy.html' target='_blank' rel='noopener noreferrer'>
                  Privacy Policy
                </a>
                .
              </>
            }
            required
          />
        </Form.Group>

        <Button className='bton' variant='primary' type='submit'>
          Sign Up For Free
        </Button>
      </Form>
    </Container>
  </div>
  <Footer />
</div>
);
};

export default NewSubscriber;