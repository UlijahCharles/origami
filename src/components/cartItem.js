import React, { useContext } from "react";
import style from "../css/cartItem.module.css";
import StoreContext from "../context/store-context";

export default function CartItem(props) {
  const ctx = useContext(StoreContext);

  function minusFunction() {
    ctx.RemoveItem(props);
  }

  function addFunction() {
    ctx.AddItem(props);
  }

  return (
    <div>
      <img className={style[`item-img`]} src={props.imgUrl}></img>
      <p className={style[`item-title`]}>{props.title}</p>
      <div className={style[`product-control`]}>
        <span
          className={style[`product-control__minus`]}
          onClick={minusFunction}
        >
          <img src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg" />
        </span>
        <span className={style[`product-control__quantity`]}>
          <input
            type="number"
            id={style[`product-quantity`]}
            name="fquantity"
            value={props.quantity}
            readOnly
          />
        </span>
        <span className={style[`product-control__plus`]} onClick={addFunction}>
          <img src="https://static.tildacdn.com/tild3865-6463-4332-a230-653238316533/arrows_circle_plus_1.svg" />
        </span>
      </div>
      <p className={style[`item-total`]}>$ {props.total}</p>
    </div>
  );
}
