import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
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
          <Col md={12}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <img src={ProductImage1} alt='carousel1' className='d-block w-100'/>
                <Carousel.Caption>
  <div>
    <h1 className="carouselText1 wow fadeInUp animated" data-wow-duration="2000ms" data-wow-delay="1000ms">Best part of software</h1>
    <ul className="list-unstyled car-mediumtext2">
      <li>
        <h3 className="car-highlight1 wow fadeInDown animated" data-wow-duration="1200ms" data-wow-delay="300ms">
          Operational part integrated to accounting ..!
        </h3>
      </li>
      <li>
        <h3 className="car-highlight3 wow fadeInDown animated" data-wow-duration="2400ms" data-wow-delay="900ms">
          Online software - accessing and controlling from anywhere..!
        </h3>                      
      </li>
      <li>
        <h3 className="car-highlight1 wow fadeInDown animated" data-wow-duration="1200ms" data-wow-delay="300ms">
          Software customization as per requirement..!
        </h3>
      </li>
    </ul>
  </div>
</Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item interval={2000}>

                <img src={ProductImage2} alt='carousel2' className='d-block w-100'/>
                <Carousel.Caption>
                <h1 className="carouselText1 col-gapall wow zoomIn animated" style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "500ms" }}>
  Our Softwares
</h1>

                <ul className="list-unstyled car-mediumtext">
  <li className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}>
    <i className="fa fa-check-square wow fadeInDown animated" data-wow-duration="1500ms" data-wow-delay="100ms" aria-hidden="true" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}></i>
    Online Transport Management Software - Full/Part Load/Cargo Comp.
  </li>
  <li className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}>
    <i className="fa fa-check-square wow fadeInDown animated" data-wow-duration="1500ms" data-wow-delay="100ms" aria-hidden="true" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}></i>
    Online Logistics Management Software - 3PL,Integrated Logistics
  </li>
  <li className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="100ms" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}>
    <i className="fa fa-check-square wow fadeInDown animated" data-wow-duration="1500ms" data-wow-delay="100ms" aria-hidden="true" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms", animationDelay: "100ms"}}></i>
    Online Warehoues Management Software
  </li>
  <li className="wow fadeInRight animated" data-wow-duration="1500ms" data-wow-delay="500ms" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "500ms", MozAnimationDelay: "500ms", animationDelay: "500ms"}}>
    <i className="fa fa-check-square wow fadeInDown animated" data-wow-duration="1500ms" data-wow-delay="100ms" aria-hidden="true" style={{visibility: "visible", WebkitAnimationDuration: "1500ms", MozAnimationDuration: "1500ms", animationDuration: "1500ms", WebkitAnimationDelay: "100ms", MozAnimationDelay: "100ms"}}></i>
    Online Freight Forwarding Software - Forwarding and clearance agent
    </li>
    </ul>
    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={ProductImage3} alt='carousel3' className='d-block w-100'/>
                <Carousel.Caption>
                {/* <div>
  <a href="#" className="btn btn-lg btn-borderwhite wow fadeInUp animated"
    style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "1600ms" }}>
    3PL Logistics Software Approved By Bajaj Auto Ltd.
  </a>
  <a href="#" className="btn btn-lg btn-borderwhite wow fadeInUp animated"
    style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "1600ms" }}>
    E-Invoice Integrated To Government Portal
  </a>
  <a href="#" className="btn btn-lg btn-borderwhite wow fadeInUp animated"
    style={{ visibility: "visible", animationDuration: "1500ms", animationDelay: "1600ms" }}>
    E-way Bill / Part-B Integrated To Government Portal
  </a>
</div> */}

                <h1 className="carouselText1 text-left wow fadeInUp animated"
    style={{ visibility: "visible", animationDuration: "1000ms", animationDelay: "150ms" }}>
  Web based Transport, logistics and International Freight Forwarding Software (GST And E-WayBill Integrated)
</h1>
        
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img src={ProductImage4} alt='carousel4' className='d-block w-100'/>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyCarousel
