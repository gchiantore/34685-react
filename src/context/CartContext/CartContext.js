import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [contador, setContador] = useState(0);
  const [totalCarrito, setTotalCarrito] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.find(
      (productInCart) => productInCart.id === product.id
    );
    if (isInCart) {
      const newArray = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          return {
            ...productInCart,
            cantidad: productInCart.cantidad + product.cantidad,
          };
        } else {
          return productInCart;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
    setContador(contador + product.cantidad);
    setTotalCarrito(
      totalCarrito +
        parseInt(product.cantidad) * parseFloat(product.precio.slice(2))
    );
  };

  const clear = () => {
    setCart([]);
    setContador(0);
    setTotalCarrito(0);
  };

  const removeFromCart = (id) => {
    const prod = cart.find((product) => product.id === id);
    setTotalCarrito(
      totalCarrito - parseInt(prod.cantidad) * parseFloat(prod.precio.slice(2))
    );
    setContador(contador - prod.cantidad);
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ contador, totalCarrito, cart, addToCart, clear, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
