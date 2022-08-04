import "./App.css";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404/Error404.js"
import Home from "./components/Pages/Home/Home.js"
import Category from "./components/Pages/Category/Category.js"
import Product from "./components/Pages/Product/Product.js"
import Cart from "./components/Pages/Cart/Cart.js"

function App() {
  return (
    <BrowserRouter>  
      <div className="App"> 
        <Navigation />
        <Routes>   
          <Route path="/" element={<Home />}/> 
          <Route path="/:categoria" element={<Category />}/> 
          <Route path="/:categoria/:id" element={<Product />} /> 
          <Route path="/cart" element={<Cart />}/>
          <Route path="/*" element={<Error404/>}/> 
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>    
  );
}

export default App;
