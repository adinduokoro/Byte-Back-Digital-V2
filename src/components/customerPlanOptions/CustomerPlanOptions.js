import React from "react";
import styles from "./CustomerPlanOptions.module.css";
import { paymentOptions } from "./data";
import checkmark from "../../assets/checkmark-outline.svg";

const CustomerPlanOptions = () => {
  return (
    <section className={styles["customer-plan-options"]}>
      <div className="container">
        <div className={styles["customer-plan-options-content"]}>
          <div className={styles["plan-options"]}>
            {paymentOptions.map((options, index) => (


              <div className={styles["plan"]} key={index}>
                <div className={styles["plan-title-container"]}>
                  <h2>{options.title}</h2>
                </div>
                <span>{options.subTitle}</span>
                <div className={styles.price}>
                  <h3 className={styles["money-sign"]}>$</h3>
                  <h3 className={styles["dollar-amount"]}>{options.price}</h3>
                  <h3 className={styles["per-month"]}>/MO</h3>
                </div>
                <ul>
                  {options.perks.map((perk, index) => (
                    <div className={styles.perk}>
                      <img src={checkmark} alt="" />
                      <li key={index}>{perk}</li>
                    </div>

                    
                  ))}
                </ul>
                <button className="btn-two">Contact Us</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPlanOptions;
