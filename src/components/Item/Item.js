import "./Item.css";
import ItemCount from "./ItemCount/ItemCount.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ imagen, titulo, precio, stock }) => {
  return (
    <Card className="cardShadow" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        className="sale"
        src="/assets/images/saleIcon.png"
      />
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{precio}</Card.Text>
        <ItemCount stock={stock} />
        <Button variant="dark" className="buttonSize">
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
