import {Container, Nav, Navbar} from 'react-bootstrap';
import Logo from '../img/logo.png'

const NavSection = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <a href="/#"><img className="logo" src={Logo} alt=""/></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-btn">Services</Nav.Link>
            <Nav.Link href="#link" className="nav-btn">About Us</Nav.Link>
            <Nav.Link href="#home" className="nav-btn">Portfolio</Nav.Link>
            <Nav.Link href="#link" className="nav-btn">Blog</Nav.Link>
            <Nav.Link href="#home" className="nav-btn">Careers</Nav.Link>
            <Nav.Link href="#link" className="nav-btn">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavSection
