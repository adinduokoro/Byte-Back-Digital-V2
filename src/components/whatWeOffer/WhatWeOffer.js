import React from "react";
import styles from "./WhatWeOffer.module.css";
import rulerMark from "../../assets/ruler-mark.svg";
import { cards } from "./data";

const WhatWeOffer = () => {
  return (
    <section className={styles["what-we-offer"]}>
      <div className="container">
        <div className={styles["what-we-offer-content"]}>



          <h2>
            WHAT <span>WE OFFER</span>
          </h2>
          <div className={styles["page-ruler"]}>
            <div className={styles.ruler}></div>
            <img src={rulerMark} alt="Ruler Mark" />
            <div className={styles.ruler}></div>
          </div>



          <p className={styles["description"]}>
            We focus on crafting web design and development solutions for small
            businesses across the US. Our hand-coded websites ensure optimal
            performance and increased brand awareness, attracting more visitors,
            and boosting your profits.
          </p>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <div className={styles.card} key={index}>
                <img src={card.image} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
