import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../../assets/images/home/logo.png";
import '../../components/css/navbar2.css';

function OffcanvasExample() {
  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-3">
          <Container  fluid>
            <Navbar.Brand href="#">
              <img
                    className="nav-logo-white d-block"
                    src={Logo}
                    width="170"
                    height="33"
                    alt="proconnect"
              />
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img
                    className="nav-logo-white d-block"
                    src={Logo}
                    width="170"
                    height="33"
                    alt="proconnect"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="searchf d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="searchbar me-2  mb-12"
                    aria-label="Search"
                  />
                  <Button className='searchbtn'>Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;