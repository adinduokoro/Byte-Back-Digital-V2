import React from "react";
import styles from "./QualityQuantity.module.css";

const QualityQuantity = () => {
  return (
    <section className={styles["quality-quantity"]}>
      <div className="container">
        <div className={styles["quality-quantity-content"]}>
          <h2>Crafting Your Digital Identity</h2>
          <p>
            Crafting your digital identity is our focus. We prioritize quality,
            tailoring every aspect to reflect your unique story and values. With
            a collaborative approach, we ensure your website embodies your
            vision, resonating with your audience.
          </p>
          <div className={styles["card-container"]}>

          </div>
          <button>Our Services</button>
        </div>
      </div>
    </section>
  );
};

export default QualityQuantity;
