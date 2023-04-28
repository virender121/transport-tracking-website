import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import logo from '../Images/companylogo.jpg';

function NavigationBar() {
  return (
    <Navbar bg="medium" expand="lg" className="navbar">
  <Container>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
      <Navbar.Brand href="/" className='flex' >
      <img
        src={logo}
        height={26}
        className="d-inline-block align-top"
        alt="Logo"
      />
      <h1 className='brand'>ABC Transport</h1>
    </Navbar.Brand>
      </Nav>
      <Nav className="justify-content-end">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Features" id="basic-nav-dropdown">
          <NavDropdown.Item href="/vehiclemanagement">
            Vehicle Management
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/videos">Demo videos</Nav.Link>
        <Nav.Link href="/subscription">Subscription</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default NavigationBar;
