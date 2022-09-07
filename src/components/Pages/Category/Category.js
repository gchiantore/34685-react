import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";
const Category=()=>{
    const cat = useParams();
    return(
        <ItemListContainer titulo="Listado de Productos" filtro={cat.categoria}/>
    )
}

export default Category;