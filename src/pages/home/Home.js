import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { paymentOptions } from "../../components/customerPlanOptions/data";
import {
  Hero,
  PaymentPlan,
  Portfolio,
  WhatWeOffer,
  WhoWeAre,
  Blog,
  CustomerPlanOptions,
} from "../../components";
import { useLocation } from "react-router-dom";

const Home = () => {
  const portfolioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#portfolio" && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div
      className={styles.home}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    >
      <Hero />
      <WhatWeOffer />
      <PaymentPlan />
      <div style={{ width: "100%" }} ref={portfolioRef}>
        <Portfolio />
      </div>
      <WhoWeAre />
      {/* <Blog /> */}
      <CustomerPlanOptions plans={paymentOptions} />
    </div>
  );
};

export default Home;
