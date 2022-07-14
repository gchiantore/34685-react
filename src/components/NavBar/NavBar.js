import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function Navigation() {
  return (
    <>
      <div className="navHeader container">
        <a href="#sigin">
            <p className="textNavHeader">Ingresar</p>
        </a>
        <a href="#login">
          <p className="textNavHeader">Registrarse</p>
        </a>
        <a href="#shop">
          <i className="textNavHeader fa-solid fa-cart-shopping"></i>
        </a>
      </div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/assets/images/fluid01-blanco-transparente-01.png"
              width="65"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#kitesurf">KiteSurf</Nav.Link>
            <Nav.Link href="#windsurf">WindSurf</Nav.Link>
            <Nav.Link href="#surf">Surf</Nav.Link>
            <Nav.Link href="#snowboard">SnowBoard</Nav.Link>
            <Nav.Link href="#foil">Foil</Nav.Link>
            <Nav.Link href="#waterwear">WaterWear</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
