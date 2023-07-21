import React from "react";
import style from "../css/catalog.module.css";
import birdLogo from "../assets/702fadad-bb35-43af-9.png";
import kindFlamingo from "../assets/d4701256-c424-4979-a.png";
import niceHumming from "../assets/Rectangle_43.jpg";
import wiseTurtle from "../assets/70337d5c-c2f0-4c4a-a.png";
import purpleFox from "../assets/Rectangle_35.jpg";
import foxLogo from "../assets/d549a8a7-1605-47e9-9.png";
import whiteOctopus from "../assets/f99b2855-a06c-49e6-8.png";
import beautifulOstrich from "../assets/2ba08c12-bca3-43ae-8.png";
import kindLizard from "../assets/70d28b83-10c3-4e7b-b.png";
import freeSwan from "../assets/Rectangle_40.jpg";
import bigElephant from "../assets/77334afc-f8aa-4384-9.png";
import swanLogo from "../assets/eaea1f61-2110-4d80-9.png";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <React.Fragment>
      <section className={style["catalog-container"]}>
        <h2 className={style["catalog-title"]} id="catalog">
          Catalog
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-3">
              <h3 className={style["catalog-sub-title"]}>
                素敵なハチドリ
                <img src={birdLogo} alt="" className={style["catalog-logo"]} />
              </h3>
              <p className={style["catalog-description"]}>
                Serum based on the nectar of flowering plants growing in the
                depths of Central America, in the habitat of pre-klan caliber
                birds. Serum based on the nectar of flowering plants growing in
                the depths of Central America, in the habitat of pre-klan
                caliber birds. Serum based on the nectar of flowering plants
                growing in the depths of Central America, in the habitat of
                pre-klan caliber birds.
              </p>
            </div>
            <div className="col-12 col-lg-3">
              <Link to="kind_flamingo" className={style["catalog-item-anchor"]}>
                <img
                  src={kindFlamingo}
                  alt=""
                  className={`${style["catalog-item"]} ${style["catalog-item-relative-postion"]}`}
                />
              </Link>
              <div className={style["catalog-hover_text"]}>King Flamingo</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
            <div className="col-12 col-lg-6">
              <Link
                to="nice_hummingbird"
                className={style["catalog-item-anchor"]}
              >
                <img
                  src={niceHumming}
                  alt=""
                  className={style["catalog-item"]}
                />
              </Link>
              <div className={style["catalog-hover_text"]}>Nice Humming</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
              <Link to="wise_turtle" className={style["catalog-item-anchor"]}>
                <img
                  src={wiseTurtle}
                  alt=""
                  className={style["catalog-item"]}
                />
              </Link>
              <div className={style["catalog-hover_text"]}>Wise Turtle</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-6">
              <Link to="purple_fox" className={style["catalog-item-anchor"]}>
                <img src={purpleFox} alt="" className={style["catalog-item"]} />
              </Link>
              <div className={style["catalog-hover_text"]}>Purple Fox</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
            <div className="col-12 col-lg-3">
              <h3 className={style["catalog-sub-title"]}>
                素敵なハチドリ
                <img src={foxLogo} alt="" className={style["catalog-logo"]} />
              </h3>
              <p
                className={style["catalog-description"]}
                id={style["description-scroll"]}
              >
                Serum based on the nectar of flowering plants growing in the
                depths of Central America, in the habitat of pre-klan caliber
                birds. Serum based on the nectar of flowering plants growing in
                the depths of Central America, in the habitat of pre-klan
                caliber birds. Serum based on the nectar of flowering plants
                growing in the depths of Central America, in the habitat of
                pre-klan caliber birds.
              </p>
              <Link to="white_octopus" className={style["catalog-item-anchor"]}>
                <img
                  src={whiteOctopus}
                  alt=""
                  className={`${style["catalog-item"]} ${style["catalog-item-relative-postion"]}`}
                />
              </Link>

              <div className={`${style["catalog-hover_text"]} `}>
                White Octopus
              </div>
              <div className={`${style["catalog-hover_subtext"]} `}>
                Order Now
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-3">
              <Link
                to="beautiful_ostrich"
                className={style["catalog-item-anchor"]}
              >
                <img
                  src={beautifulOstrich}
                  alt=""
                  className={style["catalog-item"]}
                  id={style["beautiful-ostrich"]}
                />
              </Link>
              <div className={style["catalog-hover_text"]}>
                Beautiful Ostrich
              </div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-3">
              <Link to="kind_lizard" className={style["catalog-item-anchor"]}>
                <img
                  src={kindLizard}
                  alt=""
                  className={style["catalog-item"]}
                />
              </Link>
              <div className={style["catalog-hover_text"]}>Kind Lizard</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
            <div className="col-12 col-lg-3"></div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <Link to="free_swan" className={style["catalog-item-anchor"]}>
                <img src={freeSwan} alt="" className={style["catalog-item"]} />
              </Link>
              <div className={style["catalog-hover_text"]}>Free Swan</div>
              <div className={style["catalog-hover_subtext"]}>Order Now</div>
            </div>
            <div className="col-12 col-lg-3"></div>
            <div className="col-12 col-lg-3">
              <h3 className={style["catalog-sub-title"]}>
                自由人
                <img src={swanLogo} alt="" className={style["catalog-logo"]} />
              </h3>
              <p className={style["catalog-description"]}>
                The composition includes leaves, stems, roots and flowers of
                plants such as aloe and marshmallow, used to moisturize and
                cleanse the skin. Also included are products for the treatment
                of skin diseases. Herbs, celery root and yarrow. Cereals to
                increase the effectiveness of other components of the cosmetic
                product.
              </p>
              <Link to="big_elephant" className={style["catalog-item-anchor"]}>
                <img
                  src={bigElephant}
                  alt=""
                  className={`${style["catalog-item"]} ${style["catalog-item-relative-postion"]}`}
                />
              </Link>
              <div className={`${style["catalog-hover_text"]} `}>
                Big Elephant
              </div>
              <div className={`${style["catalog-hover_subtext"]} `}>
                Order Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
