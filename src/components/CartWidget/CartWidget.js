import "./CartWidget.css";
import "../showCart/ShowCart.js"
import ShowCart from "../showCart/ShowCart.js";

const CartWidget = ({contador})=>{

    return(
        <div className="navHeader container">
            <a href="#sigin">
                <p className="textNavHeader">Ingresar</p>
            </a>
            <a href="#login">
                <p className="textNavHeader">Registrarse</p>
            </a>
            <ShowCart contador={contador}/>
        </div>
    )
}

export default CartWidget;