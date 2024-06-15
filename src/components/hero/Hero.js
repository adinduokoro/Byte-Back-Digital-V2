import React from "react";
import styles from "./Hero.module.css";
import { Navigation, SpaceContent } from "../../components";
import { BackgroundPieceOne } from "../../assets/background";
import heroImage from "../../assets/hero-image.png";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        {isDarkModeOn ? <SpaceContent /> : null}

        <div className={styles["background-piece-one-container"]}>
          <BackgroundPieceOne />
        </div>
      </div>
      <div className="container" style={{ zIndex: "20", position: "relative" }}>
        <Navigation />
        <div className={styles["hero-content"]}>
          <h1>Small Business Web Design + Development</h1>
          <p>
            No page builders or WordPress—located in Maryland, we deliver 100%
            custom-coded websites with exceptional results, starting at
            $199/month.
          </p>
          <Link to="/contact">
          <button className={`btn-one ${isDarkModeOn ? "btn-one-dark" : ""}`}>
            SEND A MESSAGE
          </button>
          
          </Link>
        </div>
        <div className={styles["hero-image"]}>
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
