import React from "react";
import styles from "./Home.module.css";
import { Hero, PaymentPlan, Portfolio, WhatWeOffer, WhoWeAre } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      <Portfolio />
      <WhoWeAre />
      {/* blog */}
      {/* plan options */}
    </section>
  );
};

export default Home;
