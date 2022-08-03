import "./Footer.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer=()=> {
    return (
    <>    
        <Container fluid className="greenProyect">
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}  className="greenProyect-lg">
                        <img src="/assets/images/fuid-eco-blaco-blanco-transparente.png" className="imgLogoEco"></img>
                        <div className="texto">
                            <h2>Green Proyect</h2>
                            <p>Cada año, 8 millones de toneladas de plástico desaparecen en el océano.<span className="strong"> Tenemos que hacer algo al respecto.</span></p>
                        </div>
                        <Button variant="dark">Te sumas?</Button>{' '}
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>    
        </Container>

        <Container fluid className="footer">
            <Container>
                <Row>
                    <Col sm={12} className="center">
                        <img src="/assets/images/fluid01-blanco-transparente-01.png" className="imgLogoEco"></img>
                        <h4>No mather the conditions</h4>
                    </Col>
                </Row> 
                <Row>   
                    <Col sm={12} className="cuerpoFooter">
                        <div className="opcionesFooter">
                            <h5>Nosotros</h5>
                            <p>Los comienzos</p>
                            <p>Mision </p>
                            <p>Vision</p>
                            <p>Valores</p>
                        </div>
                        <div className="opcionesFooter">
                            <h5>Productos</h5>
                            <p>Kitesurf</p>
                            <p>Windsurf</p>
                            <p>Surf</p>
                            <p>Snowboard</p>
                            <p>Foil</p>
                            <p>Waterwear</p>
                        </div>
                        <div className="opcionesFooter">
                            <h5>Green Proyect</h5>
                            <p>Politica Ecologica</p>
                            <p>Reduccion de Huella </p>
                            <p>Procesos de Fabricacion</p>
                            <p>Eco Packaging</p>
                        </div><div className="opcionesFooter">
                            <h5>Politica de Calidad</h5>
                            <p>Garantias y Soporte</p>
                            <p>Foros y Bolg</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="center linea">
                        
                    </Col>
                </Row> 
                <Row>
                    <Col sm={12} className="redes">
                        <i className="fa-brands fa-facebook fa-1x"></i>
                        <i className="fa-brands fa-instagram fa-1x"></i>
                        <i className="fa-brands fa-twitter fa-1x"></i>
                        <i className="fa-brands fa-youtube fa-1x"></i>
                    </Col>
                </Row>    
            </Container>    
        </Container>
    </>    
);}

export default Footer;