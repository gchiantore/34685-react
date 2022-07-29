import "./Item.css";
import ItemCount from "./ItemCount/ItemCount.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ datos }) => {
  const {imagen, titulo, precio, stock, onsale} = datos;
  return (
    <Card className="cardShadow" style={{ width: "15rem" }}>
      <div className="likeBarra">
        <i className="fa-regular fa-heart fa-1x onTop derecha likeColor"></i>
      </div>  
      {onsale? 
      <Card.Img
        variant="top"
        className="sale"
        src={"/assets/images/saleIcon.png"}
      />:``}
      <Card.Img variant="top" src={imagen} />
      
      <Card.Body>
        <div className="divisor">
        </div>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{precio}</Card.Text>
        <ItemCount stock={stock}/>
        <Button variant="dark" className="buttonSize">
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
