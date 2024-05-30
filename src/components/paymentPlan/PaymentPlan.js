import React from "react";
import styles from "./PaymentPlan.module.css";
import paymentPlanImage from "../../assets/payment-plan-image.svg";
import checkmark from "../../assets/check-mark.svg";
import { perks } from "./data";

const PaymentPlan = () => {
  return (
    <section className={styles["payment-plan"]}>
      <div className="container">
        <div className={styles["payment-plan-content"]}>
          <div className={styles["content-left"]}>
            <img src={paymentPlanImage} alt="" />
          </div>
          <div className={styles["content-right"]}>
            <h2>
              <span>$0</span> Down, <span>$150</span> Per Month, <br />6 Month Minimum Contract
            </h2>
            <p className={styles.desc}>
              $0 down for a standard 5 page small business website. If you need
              more than that then we have to do custom pricing based on the
              scope of work, number of additional pages, and time involved. <br /><br />
              You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.
            </p>
            <div className={styles.perks}>
              {perks.map((perk, index) => (
                <div className={styles.perk} key={index}>
                  <div className={styles["card-left"]}>
                    <img src={checkmark} alt="" />
                  </div>
                  <div className={styles["card-right"]}>
                    <h3>{perk.title}</h3>
                    <p>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
