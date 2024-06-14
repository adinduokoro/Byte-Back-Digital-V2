import React from "react";
import styles from "./Home.module.css";
import { Hero, PaymentPlan, Portfolio, WhatWeOffer, WhoWeAre, Blog, CustomerPlanOptions } from "../../components";

const Home = () => {
  return (
    <div className={styles.home} style={{backgroundColor: "var(--primaryBackgroundColor)"}}>
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      <Portfolio />
      <WhoWeAre />
      <Blog />
      <CustomerPlanOptions />
    </div>
  );
};

export default Home;
