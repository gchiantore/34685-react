import "./App.css";
import Navigation from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";


function App() {
  return (
    <div className="App">
      <Navigation />
      <ItemListContainer titulo="Ofertas del Dia" />
    </div>
  );
}

export default App;
