import "./CartWidget.css";

const CartWidget = ({contador})=>{
    return(
        <div className="navHeader container">
            <a href="#sigin">
                <p className="textNavHeader">Ingresar</p>
            </a>
            <a href="#login">
                <p className="textNavHeader">Registrarse</p>
            </a>
            <a href="#shop">
                <i className="textNavHeader fa-solid fa-cart-shopping fa-xl"></i>
            </a>
            <span className="top-20 start-100 translate-middle badge rounded-pill bg-primary">{contador}</span>
        </div>
    )
}

export default CartWidget;