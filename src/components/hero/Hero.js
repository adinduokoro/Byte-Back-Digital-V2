import React from "react";
import styles from "./Hero.module.css";
import { Navigation } from "../../components";
import { BackgroundPieceOne } from "../../assets/background";
import heroImage from "../../assets/hero-image.png";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";

const Hero = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <header
      className={`${styles.hero} ${isDarkModeOn ? styles["hero-dark"] : ""}`}
    >
      <div
        className={`${styles["background-container"]} ${
          isDarkModeOn ? styles["background-container-dark"] : ""
        }`}
      >
        <div className={styles["space-content"]}>i</div>
        <div className={styles.test}>
          <BackgroundPieceOne />
        </div>
      </div>
      {/* <div className="container">
        <Navigation />
        <div className={styles["hero-content"]}>
          <h1>Small Business Web Design + Development</h1>
          <p>
            No page builders or WordPress—located in Maryland, we deliver 100%
            custom-coded websites with exceptional results, starting at
            $150/month.
          </p>
          <button className={`btn-one ${isDarkModeOn ? "btn-one-dark" : ""}`}>
            SEND A MESSAGE
          </button>
        </div>
        <div className={styles["hero-image"]}>
          <img src={heroImage} alt="hero image" />
        </div>
      </div> */}
    </header>
  );
};

export default Hero;
