import Spinner from 'react-bootstrap/Spinner';
import "./Cargando.css"

const Cargando = ({mensaje}) =>{
    return(
        <div className='Cargando'>
            <h3>{mensaje}...</h3>
            <Spinner animation="border" />
        </div>    
    )
}

export default Cargando;