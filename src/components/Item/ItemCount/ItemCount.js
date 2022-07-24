import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock }) => {
  const [cantidad, setCantidad] = useState(1);

  function alteraCantidad(signo) {
    if (signo === "-") {
      if (cantidad > 1) {
        setCantidad(cantidad - 1);
      }
    } else if (signo === "+") {
      if (cantidad < stock) {
        setCantidad(cantidad + 1);
      }
    }
  }

  return (
    <>
      <p className="stk">Stock :{stock}</p>
      <div className="conContainer">
        <div className="btnContador">
          <button onClick={() => alteraCantidad("-")} className="boton">
            -
          </button>
        </div>
        <div className="txtCantidad">{cantidad}</div>
        <div className="btnContador">
          <button onClick={() => alteraCantidad("+")} className="boton">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
