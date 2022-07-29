import "./App.css";
import Navigation from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js"
import ElCarousel from "./components/Carousel/Carousel.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <ElCarousel /> 
      <ItemListContainer titulo="Nuestra seleccion del dia" /> */}
    <ItemDetailContainer item={3}/> 
    </div>
  );
}

export default App;
