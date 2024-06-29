import React from "react";
import styles from "./ServiceUpdates.module.css";
import { cards } from "./data";
import { useSelector } from "react-redux";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { Link } from "react-router-dom";

const ServiceUpdates = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <section className={styles["service-updates"]}>
      <div className="container">
        <div className={styles["service-updates-content"]}>
          <div className={styles.left}>
            <h2>Lifetime Updates for Your Website</h2>
            <p>
              Google periodically updates its search algorithm, shifting the
              criteria for ranking. Additionally, web accessibility guidelines
              for screen readers are regularly revised. Therefore, we provide 
              <span> lifetime updates</span> for your website to ensure it
              remains current and evolves with the latest standards.
            </p>
            <Link to="/contact">
              <button
                className={`btn-one ${isDarkModeOn ? "btn-one-dark" : ""}`}
              >
                Learn More
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            {cards.map((card, index) => {
              return (
                <div className={styles.card} key={index}>
                  <div className={styles["icon-container"]}>
                    {/* icon */}
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUpdates;
