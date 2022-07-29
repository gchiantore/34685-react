import {useState, useEffect} from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDeatail/ItemDetail.js" 
import prod from "../../utils/mock.products.js"

function ItemDetailContainer({item}) {
    const [producto, setProducto]=useState([]);

    const traeProducto = new Promise ((resolve, reject) => {
        setTimeout (()=>{
        resolve(prod[item])
        },2000)
    })

    useEffect(()=> {
        traeProducto
        .then((respuesta) => {
            console.log(respuesta)
            setProducto(respuesta)
        })
        .catch((error) => {
            console.log("Error en la llamada")
        })
        .finally(()=>{
            console.log ("seguimos...")
        })
    })
    
    return (
    <div className="container contenedorVista">
        <ItemDetail datos={producto}/>
    </div>
    );
}

export default ItemDetailContainer;
