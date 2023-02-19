import React, { createContext, useState, useContext } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  const [showCart, setsShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const AddToCart = (product, quantity) => {
    const isInCart = cartItems.find((item) => item._id === product._id);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQunatity) => prevTotalQunatity + quantity);
    if (isInCart) {
      const newCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
      });

      setCartItems(newCartItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: quantity },
      ]);
    }
    toast.success(`${quantity} ${product.name} added to cart `);
  };

  const removeFromCart = (id, quantity, price) => {
    const newCartItems = cartItems.filter((item) => item._id !== id);
    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - price * quantity);
    setTotalQuantity((prevTotalQunatity) => prevTotalQunatity - quantity);
  };

  const incrementCartQuantity = (id, qty, price) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
    setTotalQuantity((prevTotalQunatity) => prevTotalQunatity + 1);
    const newCartItems = cartItems.map((item) => {
      return item._id === id ? { ...item, quantity: qty + 1 } : item;
    });
    setCartItems(newCartItems);
  };
  const decrementCartQuantity = (id, qty, price) => {
    if (qty > 1) {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - price);
      setTotalQuantity((prevTotalQunatity) => prevTotalQunatity - 1);
      const newCartItems = cartItems.map((item) => {
        return item._id === id ? { ...item, quantity: qty - 1 } : item;
      });
      setCartItems(newCartItems);
    }
  };

  const toggleCart = () => setsShowCart((prevState) => !prevState);

  return (
    <Context.Provider
      value={{
        quantity,
        showCart,
        cartItems,
        totalQuantity,
        totalPrice,
        decrementCartQuantity,
        incrementCartQuantity,
        toggleCart,
        AddToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useAppcontext = () => useContext(Context);
