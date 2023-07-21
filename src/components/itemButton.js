import React from "react";
import { Link } from "react-router-dom";
import style from "../css/itemButton.module.css";

export const ItemButton = (props) => {
  return (
    <React.Fragment>
      <Link to={props.itemUrl} className={style["catalog-item-anchor"]}>
        <img src={props.itemImage} alt="" className={style["catalog-item"]} />
      </Link>
      <div className={style["catalog-hover_text"]}>{props.itemTitle}</div>
      <div className={style["catalog-hover_subtext"]}>Order Now</div>;
    </React.Fragment>
  );
};
