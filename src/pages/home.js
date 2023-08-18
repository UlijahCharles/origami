import React, { useState } from "react";
import Nav from "../components/nav";
import style from "../css/home.module.css";
import { Button } from "../components/button";
import About from "../components/about";
import Principles from "../components/principles";
import Footer from "../components/footer";
import Catalog from "../components/catalog";
import CartButton from "../components/cartButton";
import CartModal from "../components/cartModal";
import SubModal from "../components/subModal";
import { Outlet } from "react-router-dom";

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSub = () => setIsSubOpen(true);
  const closeSub = () => setIsSubOpen(false);

  return (
    <React.Fragment>
      <section className={style["intro-section"]}>
        <Nav homeBoolean={true} />
        <div className={style["intro-container"]}>
          <div className={style["intro-title-container"]}>
            <h1 className={style["intro-title"]}>Origami</h1>
          </div>

          <div className={style["intro-information-container"]}>
            <p className={style["intro-information-container__text"]}>
              Origami is not just cosmetics, it is a solution to your face
              problems. Our range of skincare products are formulated with
              cutting-edge technology and the most effective natural ingredients
              to help you achieve the results you desire.
            </p>
            <Button text={"Order Now"} onOpen={openCart} />
          </div>
        </div>
      </section>
      <About />
      <Principles />
      <Catalog />
      <Footer onOpen={openSub} />
      <CartButton onOpen={openCart} />
      {isSubOpen && <SubModal onClose={closeSub} />}
      {isCartOpen && <CartModal onClose={closeCart} />}
      <Outlet end />
    </React.Fragment>
  );
}

export default Home;
