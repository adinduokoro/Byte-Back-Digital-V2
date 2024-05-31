import React from "react";
import styles from "./Navigation.module.css";
import { navLinks } from "./data";
import Logo from "../../assets/logo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className="container">
        <div className={styles["navigation-content"]}>
          <div className={styles["logo-container"]}>
            <Logo />
          </div>
          <ul className={styles["nav-links"]}>
            {navLinks.map((link, index) => {
              return (
                <li className="label-text" key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          {/* toggle switch will be placed here */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
