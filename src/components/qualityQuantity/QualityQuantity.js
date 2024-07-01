import React from "react";
import styles from "./QualityQuantity.module.css";
import { cards } from "./data";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QualityQuantity = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <section className={styles["quality-quantity"]}>
      <div className="container">
        <div className={styles["quality-quantity-content"]}>
          <h2>
            <span>Crafting Your</span> Digital Identity
          </h2>
          <p>
            Crafting your digital identity is our focus. We prioritize quality,
            tailoring every aspect to reflect your unique story and values. With
            a collaborative approach, we ensure your website embodies your
            vision, resonating with your audience.
          </p>
          <div className={styles["cards-container"]}>
            <span className={styles["card-ruler"]}></span>
            {cards.map((card, index) => {
              return (
                <div className={styles.card}>
                  <div className={styles["card-header"]}>
                    <div className={styles["card-index"]}>
                      <div className={styles.circle1}></div>
                      <div className={styles.circle2}></div>
                      <div className={styles.circle3}>{index + 1}</div>
                    </div>
                    <h3>{card.title}</h3>
                  </div>

                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
          <Link to="/services">
          <button className={`btn-two ${isDarkModeOn ? "btn-two-dark" : ""}`}>
            OUR SERVICES
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualityQuantity;
