import React from "react";
import styles from "./SectionTitle.module.css";

const SectionTitle = ({ firstWord, secondWord, image }) => {
  return (
    <div className={styles["section-title"]}>
      <h2>
        {firstWord} <span>{secondWord}</span>
      </h2>
      <div className={styles["page-ruler"]}>
        <div className={styles.ruler}></div>
        <div className={styles["image-container"]}>
          <img src={image} alt="Ruler Mark" />
        </div>
        <div className={styles.ruler}></div>
      </div>
    </div>
  );
};

export default SectionTitle;
