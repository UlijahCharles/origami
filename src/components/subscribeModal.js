import React from "react";
import style from "../css/button.module.css";
import { Button } from "./button";

export const SubscribeModal = (props) => {
  return (
    <form>
      <label for="name">Name </label>
      <input type="text" name="name" id="name" required />
      <label for="name">Phone Number </label>
      <input type="text" name="phone" id="phone" required />
      <label for="name">Date Of Birth </label>
      <input type="text" name="name" id="name" required />
      <input type="checkbox" id="promotion" name="promotion" />
      <label for="promotion">
        Do you agree to rceive bonus promotions, special offers and birthday
        gifts
      </label>
      <submit>
        <Button />
      </submit>
    </form>
  );
};
