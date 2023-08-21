import React from "react";
import style from "../css/principle.module.css";
import principleOneImage from "../assets/4f556d00-1178-4d73-a.png";
import principleTwoImage from "../assets/9273e0f5-5012-4814-b.png";
import principleThreeImage from "../assets/6ffd7c3a-d665-4d9a-a.png";
import principleFourImage from "../assets/2e64691b-e522-4f89-8.png";

export default function Principles() {
  return (
    <React.Fragment>
      <section className={style["principle-container"]} id="principles">
        <div className="container-fluid">
          <div className="row">
            <div className={`col-12 col-lg-6 ${style["principle-item"]}`}>
              <div className={style["principle-text-container"]}>
                <h3 className={style["principle-text_title"]}>ワン - 1</h3>
                <p className={style["principle-text_description"]}>
                  Unique Formula: Our cosmetics are based on ancient recipes
                  that have been refined and refined with modern technology.
                  This allows you to achieve high results in skin care.
                </p>
              </div>
              <div className={style["principle-image-container"]}>
                <img
                  className={style["principle-image"]}
                  src={principleOneImage}
                  alt="Marketing Production"
                ></img>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${style["principle-item"]}`}>
              <div className={style["principle-text-container"]}>
                <h3 className={style["principle-text_title"]}>二 - 2</h3>
                <p className={style["principle-text_description"]}>
                  Natural Ingredients: We use only natural ingredients that help
                  gently and effectively care for the skin. Our products do not
                  contain harmful chemicals that can be harmful to health.
                </p>
              </div>
              <div className={style["principle-image-container"]}>
                <img
                  className={style["principle-image"]}
                  src={principleTwoImage}
                  alt="Marketing Production"
                ></img>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={`col-12 col-lg-6 ${style["principle-item"]}`}>
              <div className={style["principle-text-container"]}>
                <h3 className={style["principle-text_title"]}>三つ - 3</h3>
                <p className={style["principle-text_description"]}>
                  Clinical Trials: All of our products go through rigorous
                  clinical trials to ensure they are safe and effective. This
                  ensures that our cosmetics really work and help achieve the
                  desired results.
                </p>
              </div>
              <div className={style["principle-image-container"]}>
                <img
                  className={style["principle-image"]}
                  src={principleThreeImage}
                  alt="Marketing Production"
                ></img>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${style["principle-item"]}`}>
              <div className={style["principle-text-container"]}>
                <h3 className={style["principle-text_title"]}>四 - 4</h3>
                <p className={style["principle-text_description"]}>
                  Suitable for all skin types: We have developed products
                  suitable for all skin types, from dry and sensitive to oily
                  and problematic. This means that everyone can find the perfect
                  solution for their individual needs with us.
                </p>
              </div>
              <div className={style["principle-image-container"]}>
                <img
                  className={style["principle-image"]}
                  src={principleFourImage}
                  alt="Marketing Production"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
