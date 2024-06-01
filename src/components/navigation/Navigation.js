import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";
import Logo from "../../assets/logo";
import {
  SET_DARK_MODE,
  selectIsDarkModeOn,
} from "../../redux/slice/themeSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  const handleToggle = () => {
    dispatch(SET_DARK_MODE(!isDarkModeOn));
  };

  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles["navigation-content"]}>
          <div className={styles["logo-container"]}>
            <Logo />
          </div>
          <div className={styles["nav-buttons"]}>
            <ul className={styles["nav-links"]}>
              {navLinks.map((link, index) => (
                <li className="label-text" key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className={styles["button-container"]}>
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
              <p className={`${styles["button-text"]} ${isDarkModeOn ? styles["button-text-dark"] : ""}`}>{isDarkModeOn ? "LIGHT" : "DARK"}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
