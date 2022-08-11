import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDeatail/ItemDetail.js";
import prod from "../../utils/mock.products.js";

function ItemDetailContainer({ item }) {
  const [producto, setProducto] = useState([]);

  const traeProducto = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(prod.find((p) => p.id === parseInt(item)));
    }, 1);
  });

  useEffect(() => {
    traeProducto
      .then((respuesta) => {
        setProducto(respuesta);
        console.log(producto);
      })
      .catch((error) => {
        console.log("Error en la llamada");
      })
      .finally(() => {
        console.log("seguimos...");
      });
  }, []);

  return (
    <div className="container contenedorVista">
      <ItemDetail datos={producto} />
    </div>
  );
}

export default ItemDetailContainer;
