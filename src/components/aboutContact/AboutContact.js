import React from "react";
import styles from "./AboutContact.module.css";
import { ContactForm } from "../../components";
import PhoneIcon from "../../assets/phone-icon";
import PlaneIcon from "../../assets/plane-icon";

const AboutContact = () => {
  return (
    <section className={styles["about-contact"]}>
      <div className="container">
        <div className={styles["about-contact-content"]}>
          <div className={styles.left}>
            <div className={styles["contact-card"]}>
              <div className={styles.card}>
                <div className={styles["icon-container"]}>
                  <PhoneIcon />
                </div>
                <div className={styles["phone-details"]}>
                  <h2>Phone:</h2>
                  <p>(410) 870 5675</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles["icon-container"]}>
                  <PlaneIcon />
                </div>
                <div className={styles["email-details"]}>
                  <h2>Email:</h2>
                  <p>bytebackdigital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
