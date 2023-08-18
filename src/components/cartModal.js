import React, { useContext } from "react";
import { createPortal } from "react-dom";
import StoreContext from "../context/store-context";
import style from "../css/cartModal.module.css";
import CartItem from "./cartItem";

function convertCartArray(item) {
  const cartArray = item.map((i) => (
    <CartItem
      key={i.id}
      id={i.id}
      title={i.title}
      quantity={i.quantity}
      price={i.price}
      total={i.price * i.quantity}
      imgUrl={i.imageUrl}
    />
  ));
  return cartArray;
}

function formSubmit(e) {
  e.preventDefault();
}

const CartModal = (props) => {
  const ctx = useContext(StoreContext);
  const cartArray = convertCartArray(ctx.CartItems);

  return createPortal(
    <React.Fragment>
      <div
        className={style[`background-overlay`]}
        ref={props.backgroundRef}
        onClick={props.onClose}
      ></div>
      <form onSubmit={formSubmit}>
        <p>Your Order: </p>
        <hr />
        <div>{cartArray}</div>
        <hr />
        <p> Total: $ {ctx.CartTotal}</p>
        <div>
          <label htmlFor="name">Your Name: </label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Your Email: </label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phone">Your Phone: </label>
          <input type="email" id="phone" name="phone" />
        </div>

        <button type="submit" className={style["checkout-button"]}>
          Checkout
        </button>
      </form>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default CartModal;
