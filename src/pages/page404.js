import React from "react";
import style from "../css/page404.module.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className={style[`info-container`]}>
      <h1 className={style.header}>404</h1>
      <img
        className={style.logos}
        src="https://thumb.tildacdn.com/tild6236-3535-4736-b733-346163383264/-/cover/162x144/center/center/-/format/webp/702fadad-bb35-43af-9.png"
        alt="crane logo"
      />
      <img
        className={style.logos}
        src="https://static.tildacdn.com/tild6532-6236-4263-b136-393134626239/d549a8a7-1605-47e9-9.png"
        alt="fox logo"
      />
      <img
        className={style.logos}
        src="https://thumb.tildacdn.com/tild3264-3135-4136-b530-376266346635/-/cover/86x76/center/center/-/format/webp/eaea1f61-2110-4d80-9.png"
        alt="swan logo"
      />
      <h2 className={style[`sub-header`]}>PAGE NOT FOUND</h2>
      <p className={style.infos}>
        Something seems to have gone wrong! The page you're requesting doesn't
        exist. It may have been obsolete, deleted, or entered an invalid address
        in the address bar.
      </p>
      <Link to="/" className={style["button-home"]}>
        Go Home
      </Link>
    </div>
  );
}
