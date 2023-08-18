import React from "react";
import style from "../css/footer.module.css";
import { Button } from "./button";

export default function Footer(props) {
  return (
    <React.Fragment>
      <section className={style["footer-container"]}>
        <div className={style["footer-title-container"]}>
          <h2 className={style["footer-title"]}>ORIGAMI</h2>
        </div>
        <div className={style["footer-description-container"]}>
          <p className={style["footer-description"]}>
            Subscribe to our newsletter and receive information about product
            discounts and interesting facts about our cosmetic ingredients
            directly to your inbox. No spam, only valuable information.
          </p>
          <Button text={"Subscribe"} onOpen={props.onOpen} />
        </div>
      </section>
    </React.Fragment>
  );
}
