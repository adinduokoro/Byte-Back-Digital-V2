import React from "react";
import styles from "./AboutUs.module.css";
import owner from "../../assets/owner-image.png";

const AboutUs = () => {
  return (
    <section className={styles["about-us"]}>
      <div className="container">
        <div className={styles["about-us-content"]}>
          <div className={styles.left}>
            <img src={owner} alt="" />
          </div>
          <div className={styles.right}>
            <span>BYTE BACK DIGITAL WEB DESIGNS</span>
            <h2>Small Business Solutions with Big Business Impact</h2>
            <p>
              Hello! I'm Adi, the founder and developer behind Byte Back Digital
              Web Designs. My journey into web development began with a desire
              to balance my work life with being a present dad. As my wife and I
              continue to grow our family, I wanted a career that would let me
              stay home and be there for my kids' precious moments. Teaching
              myself web development from scratch, I soon realized that small
              businesses were struggling to afford quality websites.
              <br />
              <br />
              Many small businesses can't pay thousands upfront for a new
              website, and those who do often end up with outdated, poorly
              designed sites. I saw an opportunity to help and created a
              solution tailored for them: a $0 down and $199 a month plan. This
              model ensures that small businesses can get modern, effective
              websites without breaking the bank. Let’s work together to give
              your business the online presence it deserves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
