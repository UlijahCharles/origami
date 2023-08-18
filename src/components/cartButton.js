import React, { useContext } from "react";
import style from "../css/cartButton.module.css";
import StoreContext from "../context/store-context";

export default function CartButton(props) {
  const ctx = useContext(StoreContext);

  return (
    <button
      className={`${style["cart-button"]} btn btn-light`}
      onClick={props.onOpen}
    >
      Bascet: {ctx.CartLength}
    </button>
  );
}
