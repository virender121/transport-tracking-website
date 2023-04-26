import React from 'react'
import {Carousel, Col, Container, Row} from 'react-bootstrap'
import ProductImage1 from '../Images/ProductImage1.jpg'
import ProductImage2 from '../Images/ProductImage2.jpg'
import ProductImage3 from '../Images/ProductImage3.jpg'
import ProductImage4 from '../Images/ProductImage4.jpg'
import "./Carousel.css"
const MyCarousel = () => {
  return (
  <>
    <Container fluid>
        <Row>
            <Col>
               <Carousel>
                 <Carousel.Item interval={2000}>
                    <img src={ProductImage1} alt='carousel1'
                     className='d-block w-100'/>
                    <Carousel.Caption>
                      <h3 style={{backgroundColor:'orange', border:"1px solid transparent",width:'15rem'}}>3PL Software Approved By Bajaj Auto LTD.</h3>
                      <h3 style={{backgroundColor:'orange', border:"1px solid transparent", width:'15rem'}}>E-Invoice Integrated To Government Portal</h3>
                      <h1>WEB BASED TRANSPORT,</h1>
                      <h1>LOGISTIC AND INTERNATIONAL</h1>
                      <h1>FRIEGHT FORWARDED SOFTWARE</h1>
                    </Carousel.Caption>
                 </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img src={ProductImage2} alt='carousel2'
                    className='d-block w-100'/>
                 </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <img src={ProductImage3} alt='carousel3'
                    className='d-block w-100'/>
                 </Carousel.Item>
                    <Carousel.Item interval={2000}>
                    <img src={ProductImage4} alt='carousel4'
                    className='d-block w-100'/>
                 </Carousel.Item>
               </Carousel>
            </Col>
        </Row>
    </Container>
  </>
  )
}

export default MyCarousel

