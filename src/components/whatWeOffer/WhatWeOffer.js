import React from "react";
import styles from "./WhatWeOffer.module.css";

const WhatWeOffer = () => {
  return (
    <section className={styles["what-we-offer"]}>
      <div className="container">
        <div className={styles["what-we-offer-content"]}>
          <h2>
            WHAT <span>WE OFFER</span>
          </h2>
          {/* ruler */}
          <p className={styles["what-we-offer-description"]}>
            We focus on crafting web design and development solutions for small
            businesses across the US. Our hand-coded websites ensure optimal
            performance and increased brand awareness, attracting more visitors,
            and boosting your profits.
          </p>
          {/* offer cards */}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
