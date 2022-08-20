import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig.js"

const ItemListContainer = ({ titulo, filtro }) => {
  const [listaProductos, setListaProductos] = useState([]);

  const traeProductos = async() =>{
    const productCollection = collection(db, 'productos')
    let prodFil
    if (filtro===""){
        prodFil=productCollection
    }else{
        const q = query (productCollection, where("categoria","==", filtro))
        prodFil=q
    }    
    const productSnapshot = await getDocs(prodFil)
    const productList = productSnapshot.docs.map( (doc) => {
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
  }
  
  
  /* const traeProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (filtro === "") {
        resolve(prod);
      } else {
        resolve(prod.filter((p) => p.categoria === filtro));
      }
    }, 1);
  }); */

  useEffect(() => {
      traeProductos()
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
