import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import prod from "../../utils/mock.products.js";

const ItemListContainer = ({ titulo, filtro }) => {
  const [listaProductos, setListaProductos] = useState([]);

  const traeProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filtro === "") {
        resolve(prod);
      } else {
        resolve(prod.filter((p) => p.categoria === filtro));
      }
    }, 1);
  });

  useEffect(() => {
    traeProductos
      .then((respuesta) => {
        setListaProductos(respuesta);
      })
      .catch((error) => {
        console.log("Error en la llamada");
      })
      .finally(() => {
        console.log("seguimos...");
      });
  }, [filtro]);

  return (
    <Container>
      <span className="titulo">
        {titulo} {filtro}
      </span>
      <div className="itemListContainer">
        <ItemList dataProducts={listaProductos} />
      </div>
    </Container>
  );
};

export default ItemListContainer;
