import React from "react";
import styles from "./Hero.module.css";
import { Navigation } from "../../components";
import { BackgroundPieceOne } from "../../assets/background";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["background-container"]}>
        <BackgroundPieceOne />
      </div>
      <div className="container">
        {/* navigation  */}
        {/* hero content */}
      </div>
    </section>
  );
};

export default Hero;
