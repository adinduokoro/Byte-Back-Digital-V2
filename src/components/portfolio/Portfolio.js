import React from "react";
import styles from "./Portfolio.module.css";
import { SectionTitle } from "../../components";
import desktopIcon from "../../assets/desktop-icon.svg";
import { portfolios } from "./data";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";

const Portfolio = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <div className={styles["portfolio-content"]}>
          <SectionTitle
            firstWord="OUR"
            secondWord="PORTFOLIO"
            image={desktopIcon}
          />
          <div className={styles.portfolios}>
            {portfolios.map((portfolio, index) => (
              <div
                className={`${styles["portfolio-card"]} ${
                  isDarkModeOn ? styles["portfolio-card-dark"] : ""
                } `}
                key={index}
              >
                <div className={styles["image-container"]}>
                  <img src={portfolio.image} alt="" />
                </div>

                <h3>{portfolio.title}</h3>
                <h4>{portfolio.subtitle}</h4>
                <p>{portfolio.description}</p>
                <button
                  className={`btn-two ${isDarkModeOn ? "btn-two-dark" : ""}`}
                >
                  VISIT PAGE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
