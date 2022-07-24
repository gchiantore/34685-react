import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";
import Item from "../Item/Item.js";

const ItemListContainer = ({ titulo }) => {
  return (
    <Container>
      <span className="titulo">{titulo}</span>
      <div className="itemListContainer">
        <Item
          imagen="/assets/images/brunotti-pro-x.jpg"
          titulo="Brunotti Pro X"
          precio="$ 109.000"
          stock={10}
        />
        <Item
          imagen="/assets/images/brunotti-shore-bodyboard.jpg"
          titulo="Brunotti Shore"
          precio="$ 79.000"
          stock={20}
        />
        <Item
          imagen="/assets/images/brunotti-harness-gravity.jpg"
          titulo="Brunotti Gravity"
          precio="$ 76.000"
          stock={30}
        />
        <Item
          imagen="/assets/images/brunotti-men-wetsuite.jpg"
          titulo="Brunotti Wetsuit "
          precio="$ 66.000"
          stock={40}
        />
        <Item
          imagen="/assets/images/brunotti-woman-wetsuits.jpg"
          titulo="Brunotti Wetsuit"
          precio="$ 64.000"
          stock={50}
        />
      </div>
    </Container>
  );
};

export default ItemListContainer;
