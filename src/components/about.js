import React from "react";
import ReactPlayer from "react-player";
import img1 from "../assets/e70c45b0-fb8f-4e70-8.png";
import img2 from "../assets/e7dbaf68-afb9-4a6e-8.png";
import videoURL from "../assets/production.mp4";
import style from "../css/about.module.css";

export default function About() {
  return (
    <React.Fragment>
      <section className={style["about-container"]} id="aboutUs">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3">
              <p className={style["about-description_one"]}>
                Origami is a collection of skin care products dating back to
                1934. Our company has been developing high quality cosmetic
                products using advanced technologies and innovative ingredients
                for over 85 years.
              </p>
              <img src={img1} alt="" className={style["about-img_one"]} />
            </div>
            <div className="col-12 col-lg-6">
              <img src={img2} alt="" className={style["about-img_two"]} />
            </div>
            <div className="col-12 col-lg-3">
              <p className={style["about-description_two"]}>
                We are unique in that our cooking formula is based on ancient
                Japanese methods passed down from generation to generation. We
                carefully select only the most effective and natural
                ingredients, which are further processed to preserve their
                beneficial properties and maximize the impact on the skin.
              </p>
              <p className={style["about-description_three"]}>
                Our cosmetics help to solve a wide variety of skin problems,
                from dryness and flaking to acne and deep wrinkles. We are proud
                that our products help people around the world achieve healthy,
                youthful and beautiful skin.
              </p>
            </div>
          </div>
        </div>
        <ReactPlayer
          url={videoURL}
          width={"100%"}
          height={"auto"}
          playing={true}
          loop={true}
          muted
        />
      </section>
    </React.Fragment>
  );
}
