import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";
import Logo from "../../assets/logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
              {navLinks.map((link, index) => {
                return (
                  <li className="label-text" key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
            <button
              className={` ${styles["top-toggle-button"]} toggle-container`}
              onClick={handleToggle}
            >
              <span className="toggler-container">
                <span
                  className={`toggler ${isDarkModeOn ? "toggler-dark" : ""}`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
