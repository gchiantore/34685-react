import Container from "react-bootstrap/Container";
import "./ItemListContainer.css";

const ItemListContainer = ({titulo})=>{
    return(
        <Container>
            <span className="titulo">{titulo}</span>
            <div className="itemListContainer">
                
            </div>
        </Container>
    )
}

export default ItemListContainer;