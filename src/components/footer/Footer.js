import React from "react";
import styles from "./Footer.module.css";
import { BackgroundPieceTwo } from "../../assets/background";
import { navLinks } from "../navigation/data";
import Logo from "../../assets/logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["background-container"]}>
          <BackgroundPieceTwo />
        </div>
        <div className="container">
          <div className={styles["footer-content"]}>
            <div className={styles["footer-content-left"]}>
              <div>

              </div>
              <div className={styles["toggle-content-container"]}>
              <div className={styles["toggle-content"]}>
                <div className={styles.light}>
                  <div className={styles.wire}></div>
                  <div className={styles.triangle}></div>
                  <div className={styles.bulb}></div>
                </div>

                <button className={styles["toggle-container"]}>
                  <span className={styles["toggler-container"]}>
                    <span className={styles.DTspan}></span>
                  </span>
                </button>
                <p>SWITCH TO DARK MODE</p>
              </div>

              </div>
              <div className={styles["logo-container"]}>
                <div className={styles.logo}>
                  <Logo />
                </div>
                <div className={styles["logo-contact-details"]}>
                  <a href="">bytebackdigital@gmail.com</a>
                  <a href="">+1 (470) 222-5985</a>
                </div>
              </div>
            </div>
            <div className={styles["footer-content-right"]}>
              <div className={styles.navigation}>
                <h2>Navigation</h2>
                <div className={styles.ruler}></div>
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={index}>{link.name}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.navigation}>
                <h2>Services</h2>
                <div className={styles.ruler}></div>
                <ul>
                  <li>Web Design</li>
                  <li>Website Maintenance</li>
                  <li>SEO Services</li>
                  <li>Content Creation</li>
                  <li>Logo Design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright © 2024 | Byte Back Digital | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
