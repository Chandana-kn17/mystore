import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
      );

      if (existing) {
        return prev.map((item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const decreaseItem = (productId, variantId) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId &&
          item.variantId === variantId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        decreaseItem,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}