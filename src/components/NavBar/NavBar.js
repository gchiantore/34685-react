import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from  "../CartWidget/CartWidget.js"
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="fixed">
      <CartWidget contador={4}/>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img
              alt=""
              src="/assets/images/fluid01-blanco-transparente-01.png"
              width="65"
              height="60"
              className="d-inline-block align-top"
            />
          </Link>
          <Nav className="me-auto">
            <Link to="/Kitesurf"><p className="link"> KITE </p></Link>
            <Link to="/Windsurf"><p className="link"> WINDSURF </p></Link>
            <Link to="/Surf"><p className="link"> SURF </p></Link>
            <Link to="/Snowboard"><p className="link"> SNOWBOARD </p></Link>
            <Link to="/Foil"><p className="link"> FOIL </p></Link>
            <Link to="/Waterwear"><p className="link"> WATERWEAR </p></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
