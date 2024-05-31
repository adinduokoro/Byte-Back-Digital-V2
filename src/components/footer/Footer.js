import React from "react";
import styles from "./Footer.module.css";
import { BackgroundPieceTwo } from "../../assets/background";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["background-container"]}>
          <BackgroundPieceTwo />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024 | Byte Back Digital | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
