import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig.js"
import Cargando from "../Cargando/Cargando";

const ItemListContainer = ({ titulo, filtro }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

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

  useEffect(() => {
      traeProductos()
      .then((respuesta) => {
        setListaProductos(respuesta);
      })
      .catch((error) => {
        console.log("Error en la llamada");
      })
      .finally(() => {
        setCargando(false)
      }); 
  }, [filtro]);

  return (
    <>
    {
      cargando?
      <Cargando mensaje='Cargando productos' />
      :
      
      <Container>
        <span className="titulo">
          {titulo} {filtro}
        </span>
        <div className="itemListContainer">
          <ItemList dataProducts={listaProductos} />
        </div>
      </Container>
      

    }
    </>
  );
};

export default ItemListContainer;