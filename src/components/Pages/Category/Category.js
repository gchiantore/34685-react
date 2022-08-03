import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";
const Category=()=>{
    const cat = useParams();
    console.log(cat)
    return(
        <ItemListContainer titulo="Listado de Productos" filtro={cat.categoria}/>
    )
}

export default Category;