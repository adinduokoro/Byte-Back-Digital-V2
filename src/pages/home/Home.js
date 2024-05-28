import React from "react";
import styles from "./Home.module.css";
import { Hero, PaymentPlan, WhatWeOffer } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      {/* portfolio */}
      {/* whoweare */}
      {/* blog */}
      {/* plan options */}
    </section>
  );
};

export default Home;
