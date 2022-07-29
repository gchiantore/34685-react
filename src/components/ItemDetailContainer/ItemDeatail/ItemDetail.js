import "./ItemDetail.css";
import ItemCount from "../../Item/ItemCount/ItemCount.js"
import Button from "react-bootstrap/Button";
import { tableSortLabelClasses } from "@mui/material";


const ItemDetail=({ datos }) => {
    const {imagen, titulo, precio, precioAnterior, stock, onsale} = datos;
    return (
        <div className="containerDetail">
            <div className="containerImgs">
                
                <div className="tmbsContainer">
                    <div className="tmbContainer">
                        <img className="tmb" src={imagen} alt="" />
                    </div>
                    <div className="tmbContainer">
                        <img className="tmb" src={imagen} alt="" />
                    </div>
                    <div className="tmbContainer">
                        <img className="tmb" src={imagen} alt="" />
                    </div>
                    <div className="tmbContainer">
                        <img className="tmb" src={imagen} alt="" />
                    </div>
                </div>
                <div className="imgContainer">
                    <div className="likeBarra">
                        <i className="fa-regular fa-heart fa-2x onTop derecha likeColor"></i>
                    </div>  
                    {onsale? 
                    <img className="sale" src={"/assets/images/saleIcon.png"} />:``}
                    <img className="imagen" src={imagen} alt="" />
                </div>

            </div>
            <div className="containerInfo">
                <p>Home - WaterWear - {titulo}</p>
                <h1>{titulo}</h1>
                <hr />
                <div className="precio">
                    {onsale? <h4><span className="tachado">{precioAnterior}</span></h4>:``}
                    <h2>{precio}</h2>
                </div>
                <hr />
                <h4>Descripcion del Producto</h4>
                <p>{titulo}, es ideal para pasarlo genial en la playa, disfrutando de las olas, su fabricacion de foam recubierta de capas de goma eva resistente hacen que puedas gozar de la mejor diversion sin preocuparte por dañar al producto.</p>
                <hr />
                <h4>Cuantos vas a llevar?</h4>
                <div className="comprar">
                    <ItemCount stock={stock}/>
                    <Button variant="dark" className="buttonSize">
                        Agregar al Carrito
                    </Button>
                </div>
                <hr />
            </div>
        </div> 
    );
}




    

export default ItemDetail;
