import {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import prod from "../../utils/mock.products.js"

const ItemListContainer = ({ titulo }) => {

  const [listaProductos, setListaProductos]=useState([]);

  const traeProductos = new Promise ((resolve, reject) => {
    setTimeout (()=>{
      resolve(prod)
    },2000)
  })

  useEffect(()=> {
    traeProductos
      .then((respuesta) => {
        console.log(respuesta)
        setListaProductos(respuesta)
      })
      .catch((error) => {
        console.log("Error en la llamada")
      })
      .finally(()=>{
        console.log ("seguimos...")
      })
  })

  return (
    <Container>
      <span className="titulo">{titulo}</span>
      <div className="itemListContainer">
        <ItemList dataProducts={listaProductos} />
      </div>
    </Container>
  );
};

export default ItemListContainer;
