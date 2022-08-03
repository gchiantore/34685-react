import {useState, useEffect} from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDeatail/ItemDetail.js" 
import prod from "../../utils/mock.products.js"

function ItemDetailContainer({item}) {
    const [producto, setProducto]=useState([]);

    const traeProducto = new Promise ((resolve, reject) => {
        
        /*  setTimeout (()=>{
            resolve(prod[prod.findIndex((p)=>p.id==item)]) // aqui trato de obtener el indice del producto que tiene el id seleccionado
        },2000) */
        
        
        setTimeout (()=>{
            resolve(prod[item-1]) // Este funciona pero no me gusta, entiendo que por mas que ande no esta bien
        },2000)
    })

    useEffect(()=> {
        traeProducto
        .then((respuesta) => {
            
            setProducto(respuesta)
            console.log(producto)
        })
        .catch((error) => {
            console.log("Error en la llamada")
        })
        .finally(()=>{
            console.log ("seguimos...")
        })
    },[])
    
    return (
    <div className="container contenedorVista">
        <ItemDetail datos={producto}/>
    </div>
    );
}

export default ItemDetailContainer;
