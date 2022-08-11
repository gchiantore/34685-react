import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TerminaCompra = () => {
  return (
    <div className="container">
      <div className="mensajeCompra">
        <i class="fa-regular fa-face-smile fa-7x"></i>
        <p className="textoMensajeCompra">GRACIAS !!!</p>
        <p className="textoMensajeCompra">
          Todo salió perfecto, en unos minutos te llegara un correo electronico
          con los detalles del pedido y el seguimiento. Esperamos que disfrutes
          de tu compra y que hayas tenido una excelente experiencia.
        </p>
        <Link to={`/`}>
          <Button className="buttonSize" variant="dark">
            Volver al Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TerminaCompra;
