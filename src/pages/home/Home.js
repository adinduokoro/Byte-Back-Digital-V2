import React from "react";
import styles from "./Home.module.css";
import { Hero, PaymentPlan, Portfolio, WhatWeOffer, WhoWeAre, Blog } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      <Portfolio />
      <WhoWeAre />
      <Blog />
      {/* plan options */}
    </section>
  );
};

export default Home;
