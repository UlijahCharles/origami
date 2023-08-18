import React from "react";
import style from "../css/button.module.css";
import arrow from "../assets/arrow-icon.png";

export const Button = (props) => {
  return (
    <button
      className={style["button-purchase"]}
      onClick={(e) => {
        props.onAdd(props.itemData);
      }}
    >
      {props.text}
      <sup>
        <img
          width="8"
          height="8"
          src={arrow}
          alt="up-right-arrow"
          className={style["button-arrow"]}
        />
      </sup>
    </button>
  );
};
