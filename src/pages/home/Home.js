import React from "react";
import styles from "./Home.module.css";
import { Hero } from "../../components";

const Home = () => {
  return (
    <section className={styles.home}>
      <Hero />
      {/* what we offer */}
      {/* payment plan */}
    </section>
  );
};

export default Home;
