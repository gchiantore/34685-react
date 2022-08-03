import ItemListContainer from "../../ItemListContainer/ItemListContainer"
import ElCarousel from "../../Carousel/Carousel";

const Home=()=>{
    return(
        <>
            <ElCarousel />
            <ItemListContainer titulo="Listado de Productos" filtro=""/>
        </>
    )
}

export default Home;