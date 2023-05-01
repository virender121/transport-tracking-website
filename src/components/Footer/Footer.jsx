import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FiFacebook, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';
import logo from '../Images/companylogo.jpg';
import './Footer.module.css'
export default function Footer() {
  return (
    <>
      <Container fluid className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={4} className="d-flex flex-column justify-content-between">
              <img src={logo} alt="footer logo" height={120} width={30} />
              <p className="fs-15">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                similique nam esse aut voluptas ab qui veniam cupiditate
                accusantium, placeat dolorum quaerat obcaecati pariatur
                molestias.
              </p>
              <div className="d-flex justify-content-around" >
                <a href="https://www.facebook.com">
                  <FiFacebook style={{height: '30px', width: '30px'}}/>
                </a>
                <a href="https://www.linkedin.com/">
                  <FiLinkedin style={{height: '30px', width: '30px'}}/>
                </a>
                <a href="https://www.twitter.com">
                  <FiTwitter style={{height: '30px', width: '30px'}}/>
                </a>
                <a href="https://www.youtube.com">
                  <FiYoutube style={{height: '30px', width: '30px'}}/>
                </a>
              </div>
            </Col>
            <Col md={2}>
              <h3>About Us</h3>
              {/* <About /> */}
            </Col>
            <Col md={2}>
              <h3>Features</h3>
              {/* <Contactus /> */}
            </Col>
            <Col md={4}>
              <h3>Subscribe</h3>
              <Form className="d-flex mb-3 subscribe_box">
              <div style={{position: "relative", display: "inline-block"}}>
  <Form.Control type="email" placeholder="Enter your email *" className="me-5" />
  <Button variant="danger" style={{position: 'absolute', top: '-30%', right: '-13%', transform: 'translateY(-50%)'}}>
    <RiSendPlaneFill className="subscribe_box_send" />
  </Button>
</div>
   
</Form>
<div className="subscribe_box_info"  style={{position: "relative", display: "inline-block"}}>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum numquam deserunt rerum voluptates recusandae modi dolore itaque quo?</p>
</div>

             
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="bg-light">
        <Container>
          <Row>
            <Col md={12} className="text-center py-3">
              <h3 className="fs-18">
                &#169; 2023 Designed and managed by{' '}
                <span className="text-danger">Digitalshakha</span>
              </h3>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
