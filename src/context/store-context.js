import React, { useState, useEffect } from "react";

const StoreContext = React.createContext({
  CartLength: 0,
  CartItems: [],
  CartTotal: 0,
  AddItem: () => {},
  RemoveItem: (item) => {},
});

export const StoreContextProvider = (prop) => {
  const [CartLength, setCartLength] = useState(0);
  const [CartItems, setCartItems] = useState([]);
  const [CartTotal, setCartTotal] = useState(0);

  const addItemHandler = (item) => {
    const modalItem = CartItems.find((element) => element.title === item.title);
    console.log(CartItems);
    if (modalItem) {
      const modalItemPrice = CartItems[CartItems.indexOf(modalItem)].price;

      CartItems[CartItems.indexOf(modalItem)].quantity++;
      CartItems[CartItems.indexOf(modalItem)].total += modalItemPrice;

      setCartItems((oldArray) => [...oldArray]);
    } else {
      Object.assign(item, { quantity: 1, total: item.price });
      setCartItems((oldArray) => [...oldArray, item]);
    }
    const [itemAmount, cartTotal] = updateCart("add");
    setCartLength(itemAmount);
    setCartTotal(cartTotal);
  };

  const removeItemHandler = (item) => {
    const modalItem = CartItems.filter((el) => el.title === item.title)[0];
    const modalItemPrice = CartItems[CartItems.indexOf(modalItem)].price;

    const itemIndex = CartItems.indexOf(modalItem);

    if (CartItems.length > 0 && CartItems[itemIndex].quantity > 1) {
      CartItems[itemIndex].quantity--;
      CartItems[CartItems.indexOf(modalItem)].total -= modalItemPrice;
      setCartItems((oldArray) => [...oldArray]);
    } else {
      const newCart = CartItems.filter(
        (item) => item.title !== modalItem.title
      );
      console.log(newCart);
      setCartItems(newCart);
    }
    const [itemAmount, cartTotal] = updateCart("minus");
    setCartLength(itemAmount);
    setCartTotal(cartTotal);
  };

  const updateCart = (arthmitic) => {
    let currentCartLength;
    let cartTotal = 0;
    if (arthmitic === "add") {
      currentCartLength = CartLength + 1;
    }

    if (arthmitic === "minus") {
      currentCartLength = CartLength - 1;
    }

    CartItems.forEach((item) => {
      cartTotal += item.total;
    });

    return [currentCartLength, cartTotal];
  };

  return (
    <StoreContext.Provider
      value={{
        CartLength: CartLength,
        CartItems: CartItems,
        CartTotal: CartTotal,
        AddItem: addItemHandler,
        RemoveItem: removeItemHandler,
      }}
    >
      {prop.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
