import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import useFetch from "../hooks/use-Fetch";
import birdEmblem from "../assets/c7c16132-d555-4d33-8.png";
import style from "../css/itemPage.module.css";
import { ItemButton } from "../components/itemButton";
import { Button } from "../components/button";
import CartButton from "../components/cartButton";

function textCreation(string) {
  let stringCopy = string;
  let secondCapIndex;

  if (stringCopy.includes("_")) {
    secondCapIndex = stringCopy.indexOf("_") + 1;
    stringCopy = stringCopy
      .replace(stringCopy.charAt(0), stringCopy.charAt(0).toUpperCase())
      .replace("_", " ")
      .replace(
        stringCopy.charAt(secondCapIndex),
        stringCopy.charAt(secondCapIndex).toUpperCase()
      );
  } else {
    secondCapIndex = stringCopy.indexOf(" ") + 1;
    stringCopy = stringCopy
      .replace(stringCopy.charAt(0), stringCopy.charAt(0).toLowerCase())
      .replace(" ", "_")
      .replace(
        stringCopy.charAt(secondCapIndex),
        stringCopy.charAt(secondCapIndex).toLowerCase()
      );
  }

  return stringCopy;
}

function randomPicker(currentItem, catalogData) {
  const otherItems = catalogData.filter((el) => el !== currentItem);

  const seeMoreArray = [];

  for (let i = 0; i <= 2; i++) {
    seeMoreArray.push(
      otherItems[Math.floor(Math.random() * otherItems.length)]
    );
  }

  return seeMoreArray;
}

function ItemPage() {
  const catalogData = useFetch();
  const searchParam = textCreation(window.location.pathname.substring(1));
  let currentItem = catalogData.find((el) => el.title === searchParam);

  const [currentLink, setCurrentLink] = useState(
    window.location.pathname.substring(1)
  );

  console.log(currentLink);

  const seeMoreItems = randomPicker(currentItem, catalogData);
  return (
    <React.Fragment>
      <Nav />
      <div className="container-fluid">
        <div className={`row ${style["item-row"]}`}>
          <div className={`col-12 col-lg-6 `}>
            <div className={style["contain-container"]}>
              <h2 className={style["contain-title"]}>Contains</h2>
              <p className={style["contain-description"]}>
                Origami is not just a set of skin care products, it is a true
                art of creating harmony between man and nature. Formulated with
                the highest quality natural ingredients, including plant
                extracts, minerals and oils, it not only cares for the skin but
                also restores its natural balance. Japanese cosmetics are known
                for their technological innovation and deep understanding of
                exactly what our skin needs to stay healthy and beautiful.
                Discover the world of Japanese natural cosmetics and feel its
                incredible power and beauty.
              </p>
              <Button text={"Order Now"} />
            </div>
          </div>
          <div className={`col-12 col-lg-6 `}>
            {catalogData.length !== 0 ? (
              <img
                src={currentItem.imageUrl}
                alt=""
                className={style["contain-item-image"]}
              ></img>
            ) : (
              "Loading......."
            )}
          </div>
        </div>
        <h2 className={style["consist-title"]}>Consist</h2>
        <div className={`row ${style["item-row"]}`}>
          <div className={`col-12 col-lg-6 `}>
            <div className={style["consist-container"]}>
              <h2 className={style["consist-sub-title"]}>
                素敵なハチドリ <img src={birdEmblem} alt="" />
              </h2>
              <p className={style["consist-description"]}>
                Collagen synthesis promotion: Certain ingredients in the serum,
                such as peptides or vitamin C, may promote collagen synthesis,
                which can help improve skin elasticity and firmness.
              </p>

              <p className={style["consist-description"]}>
                Antioxidant protection: The serum may contain antioxidants that
                can neutralize free radicals and protect the skin from
                environmental damage.
              </p>

              <p className={style["consist-description"]}>
                Moisture retention: The serum may contain humectants or
                emollients that help to keep skin hydrated by trapping moisture
                inside it.
              </p>

              <p className={style["consist-description"]}>
                Improved skin texture: The serum may help to exfoliate the skin
                gently, resulting in a smoother and softer skin texture.
              </p>
            </div>
            <div className={style["consist-container_ingredients"]}>
              <hr />
              <h3 className={style["consist_ingredients-title"]}>Hydration:</h3>
              <p className={style["consist_ingredients-description"]}>
                The serum may provide deep hydration to the skin due to the
                presence of the nectar of the flowering plants.
              </p>
              <hr />
              <h3 className={style["consist_ingredients-title"]}>
                Nourishment:
              </h3>
              <p className={style["consist_ingredients-description"]}>
                The serum may contain essential nutrients, vitamins, and
                minerals that nourish and rejuvenate the skin.
              </p>
              <hr />
              <h3 className={style["consist_ingredients-title"]}>
                Anti-aging:
              </h3>
              <p className={style["consist_ingredients-description"]}>
                Fringilla amet odio ornare auctor adipiscing feugiat adipiscing
                auctor. Morbi amet purus purus nec vel urna eget.
              </p>
              <hr />
              <h3 className={style["consist_ingredients-title"]}>Smoothing:</h3>
              <p className={style["consist_ingredients-description"]}>
                The serum may help smooth out wrinkles and fine lines on the
                skin, resulting in a youthful appearance.
              </p>
              <hr />
            </div>
          </div>

          <div className={`col-12 col-lg-6 ${style["consist-image"]} `}></div>
        </div>
        <h2 className={style["consist-title"]}>See More</h2>
        {seeMoreItems[2] ? (
          <div className={style["seeMore-container"]}>
            <div
              className={style["seeMore-item"]}
              onClick={() =>
                setCurrentLink(textCreation(seeMoreItems[0].title))
              }
            >
              <ItemButton
                itemTitle={seeMoreItems[0].title}
                itemImage={seeMoreItems[0].imageUrl}
                itemUrl={`/${textCreation(seeMoreItems[0].title)}`}
              />
            </div>
            <div
              className={style["seeMore-item"]}
              onClick={() =>
                setCurrentLink(textCreation(seeMoreItems[0].title))
              }
            >
              <ItemButton
                itemTitle={seeMoreItems[1].title}
                itemImage={seeMoreItems[1].imageUrl}
                itemUrl={`/${textCreation(seeMoreItems[1].title)}`}
              />
            </div>
            <div
              className={style["seeMore-item"]}
              onClick={() =>
                setCurrentLink(textCreation(seeMoreItems[0].title))
              }
            >
              <ItemButton
                itemTitle={seeMoreItems[2].title}
                itemImage={seeMoreItems[2].imageUrl}
                itemUrl={`/${textCreation(seeMoreItems[2].title)}`}
              />
            </div>
          </div>
        ) : (
          "Loading......."
        )}
      </div>
      <CartButton />
      <Footer />
    </React.Fragment>
  );
}

export default ItemPage;
