import React from "react";
import styles from "./Hero.module.css";
import { Navigation } from "../../components";
import { BackgroundPieceOne } from "../../assets/background";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles["background-container"]}>


      



        <BackgroundPieceOne />
      </div>
      <div className="container">
        <Navigation />
        <div className={styles["hero-content"]}>
          <h1>Small Business Web Design + Development</h1>
          <p>
            No page builders or WordPress—located in Maryland, we deliver 100%
            custom-coded websites with exceptional results, starting at
            $150/month.
          </p>
          <button className="btn-one">SEND A MESSAGE</button>
        </div>
        <div className={styles["hero-image"]}>
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
