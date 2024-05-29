import React from "react";
import styles from "./Portfolio.module.css";
import { SectionTitle } from "../../components";
import desktopIcon from "../../assets/desktop-icon.svg";
import { portfolios } from "./data";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles["portfolio-content"]}>
          <SectionTitle
            firstWord={"OUR"}
            secondWord={"PORTFOLIO"}
            image={desktopIcon}
          />
          <div className={styles.portfolios}>
            {portfolios.map((portfolio, index) => (
              <div className={styles["portfolio-card"]} key={index}>
                <img src={portfolio.image} alt="" />
                <h3>{portfolio.title}</h3>
                <p>{portfolio.subtitle}</p>
                <p>{portfolio.description}</p>
                <button>VISIT PAGE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
