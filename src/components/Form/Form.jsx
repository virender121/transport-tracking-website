import React from 'react';
import './Form.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div className='form'>
      <h1>Contact With Us</h1>
      <Form>
        <Row>
          <Col md={6} xs={12}>
            <Form.Control size='lg' className='input mb-3' placeholder='Your Name*' />
          </Col>
          <Col md={6} xs={12}>
            <Form.Control size='lg' className='input mb-3' placeholder='E-mail*' />
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12}>
            <Form.Control size='lg' className='input mb-3' placeholder='Your Phone' />
          </Col>
          <Col md={6} xs={12}>
            <Form.Control size='lg' className='input mb-3' placeholder='Your Subject' />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Control className='input' placeholder='Your Message' name='message' as='textarea' rows={5} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button className='bton' type='submit'>Send Message</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ContactForm;
