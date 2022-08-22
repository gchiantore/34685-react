import './Modal.css'
import Button from "react-bootstrap/Button";

const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            <Button className="cerrar" variant="dark" onClick={() => close(false)}>X</Button>
            {children}
        </div>
    )
}

export default Modal