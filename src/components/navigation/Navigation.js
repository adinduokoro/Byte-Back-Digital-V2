import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";
import Logo from "../../assets/logo";
import HamburgerMenu from "../../assets/hamburgerMenu";
import CloseIcon from "../../assets/close-icon";

import {
  SET_DARK_MODE,
  selectIsDarkModeOn,
} from "../../redux/slice/themeSlice";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  const handleToggle = () => {
    dispatch(SET_DARK_MODE(!isDarkModeOn));
  };

  const handleLinkClick = (path) => {
    dispatch(SET_CURRENT_PATH(path));
  };

  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles["navigation-content"]}>
          <div className={styles["logo-container"]}>
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <Logo />
            </Link>
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
          <div className={styles["nav-buttons"]}>
            <ul className={styles["nav-links"]}>
              {navLinks.map((link, index) => (
                <li className="label-text" key={index}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <div className={styles["close-icon"]}>
                <CloseIcon />
              </div>
            </ul>

            <div className={styles["button-container"]}>
              <div className={styles["hamburger-menu"]}>
                <HamburgerMenu />
              </div>
              <button
                className={`${styles["top-toggle-container"]} toggle-container`}
                onClick={handleToggle}
              >
                <span
                  className={`${
                    styles["toggler-container"]
                  } toggler-container ${
                    isDarkModeOn ? "toggler-container-dark" : ""
                  }`}
                >
                  <span
                    className={`toggler ${isDarkModeOn ? "toggler-dark" : ""}`}
                  ></span>
                </span>
              </button>
              <p
                className={`${styles["button-text"]} ${
                  isDarkModeOn ? styles["button-text-dark"] : ""
                }`}
              >
                {isDarkModeOn ? "LIGHT" : "DARK"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
