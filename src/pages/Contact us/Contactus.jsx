import React from 'react';
import Footer from '../../components/Footer/Footer';
import {FiPhone, FiMail} from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';
import './Contactus.css'
import Form from '../../components/Form/Form';

const Contactus = () => {
  const contacts=[
    {
      id:1,
      icon:<FiPhone/>,
      heading: 'CALL US',
      text: '+91 6230**5545 +91 5483**7967'
    },
    {
      id:2,
      icon:<FiMail/>,
      heading: 'MAKE A QUOTE',
      text: 'info@digitalshakha.in'
    },
    {
      id:3,
      icon:<AiOutlineHome/>,
      heading: 'ADDRESS',
      text: 'Bhilai, Chhattisgarh'
    }
  ]
  return (
    <div>
      <div className='contact'>
        <h1 className='header'>Contact us</h1>
      </div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <div className='card'>
                <p className='icons fs-22'>{contact.icon}</p>
                <h2 style={{color:'var( --bs-primary)'}}>{contact.heading}</h2>
                <p className='texts fs-16'>{contact.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contactus
