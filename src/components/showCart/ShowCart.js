import React, { useState, useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./ShowCart.css";
import { CartContext } from "../../context/CartContext/CartContext.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CartContainer() {
  const [show, setShow] = useState(false);
  const { contador, totalCarrito, removeFromCart, cart, clear } =
    useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div onClick={handleShow}>
        <i className="textNavHeader fa-solid fa-cart-shopping fa-xl"></i>
        {contador > 0 ? (
          <span className="top-20 start-100 translate-middle badge rounded-pill bg-primary">
            {contador}
          </span>
        ) : (
          ""
        )}
      </div>

      <Offcanvas
        show={show}
        key={1}
        placement="end"
        name="end"
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {contador === 0 ? (
            <h3>Carrito Vacio !</h3>
          ) : (
            <>
              <div className="tituloCarrito">
                <h5>Detalle del Carrito</h5>
              </div>
              {cart.map((p) => {
                return (
                  <div key={p.id} className="item">
                    <div className="itemImg">
                      <img className="imagen" src={`/assets/images/${p.imagen}`} alt="" />
                    </div>
                    <div className="itemConDesc">
                      <div className="itemDescText">
                        <p className="itemDesc">{p.titulo}</p>
                      </div>
                      <div className="itemDescWidget">
                        <p className="itemDesc">{p.cantidad}</p>
                      </div>
                      <div className="itemDescWidget">
                        <p className="itemDesc">{p.precio}</p>
                      </div>
                    </div>
                    <div className="itemConPrec">
                      <div className="itemConDel">
                        <button onClick={() => removeFromCart(p.id)}>
                          <i className="itemDel fa-solid fa-trash-can fa-l"></i>
                        </button>
                      </div>
                      <div className="itemConCant">
                        <p className="itemCant">
                          {(p.cantidad) * (p.precio)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="totalCarrito">
                <h5 className="importeTotal">
                  Total Carrito : $ {totalCarrito}
                </h5>
              </div>
              <Link to="/Cart">
                <Button
                  onClick={handleClose}
                  variant="dark"
                  className="buttonSize"
                >
                  Terminar Compra
                </Button>
              </Link>
              <div className="separador"></div>
              <Link to={`/`}>
                <Button
                  onClick={() => clear()}
                  className="buttonSize"
                  variant="light"
                >
                  Vaciar Carrito
                </Button>
              </Link>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ShowCart({ contador }) {
  return (
    <>
      <CartContainer contador={contador} />
    </>
  );
}

export default ShowCart;
