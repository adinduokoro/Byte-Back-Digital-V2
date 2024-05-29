import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <div className={styles["portfolio-content"]}>hello world</div>
      </div>
    </section>
  );
};

export default Portfolio;
