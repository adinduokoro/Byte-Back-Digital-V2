import React from "react";
import styles from "./WhoWeAre.module.css";
import { SectionTitle } from "../../components";
import personIcon from "../../assets/person-icon.svg";
import owner from "../../assets/profile-pic.png";
import Blob from "../../assets/profile-pic-blob";

const WhoWeAre = () => {
  return (
    <section className={styles["who-we-are"]}>
      <div className="container">
        <div className={styles["who-we-are-content"]}>
          <SectionTitle
            firstWord={"WHO"}
            secondWord={"WE ARE"}
            image={personIcon}
          />
          <p className={styles.about}>
            I'm Adi, a committed stay-at-home dad and enthusiastic web
            developer. I started this business to support my family while being
            present for my child. After a year and a half of teaching myself web
            design and coding, I've now been professionally creating websites
            for over five years, continuously perfecting my craft.
          </p>
          <div className={styles["profile-container"]}>
            <div className={styles["profile-container-background"]}>
              <Blob />
            </div>
            <img src={owner} alt="owner" />
          </div>
          <div className={styles["owner-details"]}>
            <h3>Adi O.</h3>
            <h4>OWNER / DEVELOPER</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
