import React from "react";
import styles from "./Footer.module.css";
import { BackgroundPieceTwo } from "../../assets/background";
import { navLinks } from "../navigation/data";
import Logo from "../../assets/logo";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_DARK_MODE,
  selectIsDarkModeOn,
} from "../../redux/slice/themeSlice";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  const date = new Date()
  const year = date.getFullYear()

  const handleToggle = () => {
    dispatch(SET_DARK_MODE(!isDarkModeOn));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["background-container"]}>
          <BackgroundPieceTwo />
        </div>
        <div className="container">
          <div className={styles["footer-content"]}>
            <div className={styles["footer-content-left"]}>
              <div className={styles["toggle-content-container"]}>
                <div className={styles["toggle-content"]}>
                  <div className={styles.light}>
                    <div
                      className={`${styles.wire} ${
                        isDarkModeOn ? styles["wire-dark"] : ""
                      }`}
                    ></div>
                    <div
                      className={`${styles.triangle} ${
                        isDarkModeOn ? styles["triangle-dark"] : ""
                      }`}
                    ></div>
                    <div
                      className={`${styles.bulb} ${
                        isDarkModeOn ? styles["bulb-animated"] : ""
                      }`}
                    ></div>
                  </div>

                  <button className={`toggle-container`} onClick={handleToggle}>
                    <span
                      className={`toggler-container ${
                        isDarkModeOn ? "toggler-container-dark" : ""
                      }`}
                    >
                      <span
                        className={`toggler ${
                          isDarkModeOn ? "toggler-dark" : ""
                        }`}
                      ></span>
                    </span>
                  </button>
                  <p>SWITCH TO {isDarkModeOn ? "LIGHT" : "DARK"} MODE</p>
                </div>
              </div>
              <div className={styles["logo-container"]}>
                <div className={styles.logo}>
                  <Logo />
                  {isDarkModeOn ? (
                    <div className={styles["after-dark"]}>
                      <span>A</span>
                      <span>f</span>
                      <span>t</span>
                      <span>e</span>
                      <span>r</span>
                      <span>D</span>
                      <span>a</span>
                      <span>r</span>
                      <span>k</span>
                    </div>
                  ) : null}
                </div>
                <div className={styles["logo-contact-details"]}>
                  <a href="">bytebackdigital@gmail.com</a>
                  <a href="">+1 (410) 870-5675</a>
                </div>
              </div>
            </div>
            <div className={styles["footer-content-right"]}>
              <div className={styles.navigation}>
                <h2>Navigation</h2>
                <div className={styles.ruler}></div>
                <ul>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.name}</Link>
                    </li>
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
        <p>Copyright © {year} | Byte Back Digital | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
