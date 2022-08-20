import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDeatail/ItemDetail.js";


import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

function ItemDetailContainer({ item }) {
  const [producto, setProducto] = useState([]);

  const traeProducto = async () => {
    const docRef = doc(db, 'productos', item)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    console.log('data con id:', product)
    return product
}


  useEffect(() => {
    traeProducto()
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
  }, [item]);

  return (
    <div className="container contenedorVista">
      <ItemDetail datos={producto} />
    </div>
  );
}

export default ItemDetailContainer;
