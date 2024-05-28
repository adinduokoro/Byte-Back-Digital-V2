import React from "react";
import styles from "./Home.module.css";
import { Hero, WhatWeOffer } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      <WhatWeOffer />
      {/* payment plan */}
    </section>
  );
};

export default Home;
