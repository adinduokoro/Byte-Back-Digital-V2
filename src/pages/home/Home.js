import React from "react";
import styles from "./Home.module.css";
import { Hero, PaymentPlan, Portfolio, WhatWeOffer, WhoWeAre, Blog, CustomerPlanOptions } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      <Portfolio />
      <WhoWeAre />
      <Blog />
      <CustomerPlanOptions />
    </section>
  );
};

export default Home;
