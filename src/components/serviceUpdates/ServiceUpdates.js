import React from "react";
import styles from "./ServiceUpdates.module.css";

const ServiceUpdates = () => {
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
              <span>lifetime updates</span> for your website to ensure it remains current and
              evolves with the latest standards.
            </p>
            <button>Learn More</button>
          </div>
          <div className={styles.right}>
            {/* cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUpdates;
