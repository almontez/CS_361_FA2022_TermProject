import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'

function NavigationBar() {
  return (
    <Navbar id="nav-bar" bg="light" expand="lg" sticky='top'>
      <Container id="nav-bar-brand">
        <Navbar.Brand id="nav-bar-left" href="#home">
            <img src={logo} width={125} height={75} alt="logo" 
            />{' '} Parkminder
          </Navbar.Brand>
      </Container>
      <Container id="nav-bar-links">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#start">Get Started</Nav.Link>
              <Nav.Link href="#faq">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;