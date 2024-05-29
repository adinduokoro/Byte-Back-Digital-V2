import React from "react";
import styles from "./WhoWeAre.module.css";
import { SectionTitle } from "../../components";
import personIcon from "../../assets/person-icon.svg";

const WhoWeAre = () => {
  return (
    <section className={styles["who-we-are"]}>
      <div className="container">
        <div className={styles["who-we-are-container"]}>
          <SectionTitle
            firstWord={"WHO"}
            secondWord={"WE ARE"}
            image={personIcon}
          />
          <p>
            I'm Adi, a dedicated stay-at-home dad and passionate web developer.
            I launched this business to support my family while staying present
            for my kid. After a year and a half of self-taught web design and
            coding, I've now been professionally crafting websites for over five
            years, perfecting my process with each of the hundreds I've built.
          </p>
          {/* picture */}
          {/* name */}
          {/* title */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
