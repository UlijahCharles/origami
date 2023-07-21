import React from "react";
import style from "../css/cartButton.module.css";

export default function CartButton(props) {
  return (
    <button className={`${style["cart-button"]} btn btn-light`}>
      Bascet: 0
    </button>
  );
}
