import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedItems = localStorage.getItem("cart");
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  function addToCart(product) {
    const existingItem = cart.find((item) => item.product._id === product._id);

    if (existingItem) {
      setCart((prev) => {
        return prev.map((item) =>
          item.product._id === existingItem.product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCart((prev) => {
        return [...prev, { product, quantity: 1 }];
      });
    }
  }

  function removeFromCart(product) {
    setCart(cart.filter((item) => item.product._id !== product._id));
  }

  function getTotalItems() {
    let total = 0;

    for (let item of cart) {
      total += item.quantity;
    }

    return total;
  }

  function getTotalPrice() {
    let total = 0;

    for (let item of cart) {
      total += item.product.price * item.quantity;
    }

    return total;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
