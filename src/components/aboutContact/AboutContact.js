import React from "react";
import styles from "./AboutContact.module.css";
import {ContactForm} from "../../components"

const AboutContact = () => {
  return (
    <section className={styles["about-contact"]}>
      <div className="container">
        <div className={styles["about-contact-content"]}>
          <div className={styles.left}>
            {/* contact details */}
          </div>
          <div className={styles.right}>
            <ContactForm />
            <div className={styles["contact-card"]}>
              <div className={styles.card}>
                {/* icon */}
                {/* phone */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
