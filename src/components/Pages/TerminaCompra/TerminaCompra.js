import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext/CartContext.js";
import "../TerminaCompra/TerminaCompra.css"
import db from "../../../firebaseConfig.js";
import { collection, addDoc } from 'firebase/firestore'


const TerminaCompra = () => {
  const [comprado, setComprado]=useState(0);
  const { totalCarrito,cart, clear } = useContext(CartContext);
  const [ ordenOk, setOrdenOk ] = useState(false)
  const [orden, setOrden] = useState({
    items: cart.map((p) => {
        return {
            id: p.id,
            tit: p.titulo,
            prec: p.precio,
            cant: p.cantidad,
        }
    } ),
    cliente: {},
    fecha: new Date().toLocaleString(),
    totalCompra: totalCarrito
})
const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    telefono: '',
    email:''
})

  const manejoCompra=(e) => {
    e.preventDefault()
    console.log("order para enviar: ", {...orden, cliente: datosCliente})
    enviaDatos({...orden, cliente: datosCliente})
    clear()
  }

  const manejoCambioForm = (e) => {
    setDatosCliente({...datosCliente, [e.target.name] : e.target.value})
}

const enviaDatos = async (newOrder) => {
  const collectionOrder = collection(db, 'ordenes')
  const orderDoc = await addDoc(collectionOrder, newOrder)
  setOrdenOk(orderDoc.id)
  console.log('ORDEN GENERADA', orderDoc)
  setComprado(1)
}

  const canceloCompra = () =>{
    clear()
    setComprado(2)
  }

  return (
    <>
    {comprado===0 && 
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-smile-wink fa-7x"></i>
          <p className="textoMensajeCompra">
            Solo un paso mas, dejanos tus datos para poder envierte los producto.
          </p>
          <div className="formRegistro">
            <Form onSubmit={manejoCompra} >
              <Form.Group className="mb-3" controlId="Nombre">
                <Form.Label>Apellido y Nombre</Form.Label>
                <Form.Control 
                    onChange={manejoCambioForm}
                    type="text" 
                    name="nombre"
                    placeholder="Juan Perez" 
                    value={datosCliente.nombre}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Telefono">
                <Form.Label>Telefono</Form.Label>
                <Form.Control 
                    name="telefono"
                    type="phone" 
                    placeholder="(+1-(3545)-400200))" 
                    value={datosCliente.telefono}
                    onChange={manejoCambioForm}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>e-mail</Form.Label>
                <Form.Control 
                    onChange={manejoCambioForm}
                    type="email" 
                    name="email"
                    placeholder="alguien@algo.com" 
                    value={datosCliente.email}
                />
              </Form.Group>
              <div className="botonesCompra">
              <Button onClick={()=> canceloCompra()} className="buttonComp" variant="light">
                  Cancelar Compra
                </Button>
                <Button className="buttonComp" variant="dark" type="submit">
                  Realizar Compra
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>    
    }
    {comprado === 1 &&
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-smile fa-7x"></i>
          <p className="textoMensajeCompra">GRACIAS !!!</p>
          <p className="textoMensajeCompra">
            Todo salió perfecto, se genero la orden <span className="ordenID">{ordenOk}</span>, en breve te llegara un correo con toda la informacion de envio!
          </p>
          <Link to={`/`}>
            <Button className="buttonSize" variant="dark">
              Volver al Home
            </Button>
          </Link>
        </div>
      </div>
    }
    {comprado===2 && 
      <div className="container">
        <div className="mensajeCompra">
          <i className="fa-regular fa-face-frown fa-7x"></i>
          <p className="textoMensajeCompra">Ohhh que pena !</p>
          <p className="textoMensajeCompra">
            La Orden fue cancelada, la proxima tal vez sea! Gracias de todos modos!
          </p>
          <Link to={`/`}>
            <Button className="buttonSize" variant="dark">
              Volver al Home
            </Button>
          </Link>
        </div>
      </div>
    }
    </>
  );
};

export default TerminaCompra;
