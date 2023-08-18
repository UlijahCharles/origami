import React from "react";
import { createPortal } from "react-dom";
import style from "../css/subModal.module.css";

const subModal = (props) => {
  return createPortal(
    <React.Fragment>
      <div
        className={style[`background-overlay`]}
        ref={props.backgroundRef}
        onClick={props.onClose}
      ></div>
      <form>
        <p className={style.title}>NEWSLETTER</p>

        <label for="name">Your Name: </label>
        <input type="text" id="name" name="name" />
        <label for="email">Your Email: </label>
        <input type="email" id="email" name="email" />
        <label for="phone">Your Phone: </label>
        <input type="email" id="phone" name="phone" />
        <label for="promotion">
          <input type="checkbox" id={style.promotion} name="promotion" />
          <span class="promotion-message">
            Do you agree to rceive bonus promotions, special offers and birthday
            gifts
          </span>
        </label>

        <button type="submit" className={style["checkout-button"]}>
          Checkout
        </button>
      </form>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default subModal;
