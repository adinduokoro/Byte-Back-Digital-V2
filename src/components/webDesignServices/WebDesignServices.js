import React from "react";
import styles from "./WebDesignServices.module.css";
import ServiceImg1 from "../../assets/service-img-1.svg";
import ServiceImg2 from "../../assets/service-img-2.svg";
import ServiceImg3 from "../../assets/service-img-3.svg";
import checkmark from "../../assets/check-mark-2.svg"


const WebDesignServices = () => {
  return (
    <section className={styles["web-design-services"]}>
      <div className="container">
        <div className={styles["web-design-services-content"]}>
          {/* --------------------------------------- */}
          <div className={styles["service-one"]}>
            <div className={styles.left}>
              <img src={ServiceImg1} alt="" />
            </div>
            <div className={styles.right}>
              <h2>Web Design & Development Done Differently</h2>
              <p>
                Our development process is unique because we avoid WordPress,
                frameworks, and page builders. We handcraft each line of code,
                ensuring full control over the design and optimal performance
                without the bloat that slows down other sites
                <br />
                <br />
                Handcrafted websites <span>outperform most WordPress</span> and
                drag-and-drop builder sites, which can be costly. In the online
                world, speed and organization are key to winning.
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className={styles["service-two"]}>
            <div className={styles.left}>
              <img src={ServiceImg2} alt="" />
            </div>
            <div className={styles.right}>
              <h2>Search Engine Optimization For 2024</h2>
              <p>
                If anyone tells you they can get your site on Google's front
                page in 3 months - <span>RUN!</span> Without exposure from big
                names like The New York Times, it may take years to rank high.
                <br />
                <br />
                We offer state-of-the-art SEO techniques for 2024:
              </p>
              <ul>
                <li>
                  <img src={checkmark} alt="" />
                  <p>Keyword-Focused Content & Blogging</p>
                </li>
                <li>
                  <img src={checkmark} alt="" />

                  <p>Optimized for Mobile-First Experience</p>
                </li>
                <li>
                  <img src={checkmark} alt="" />

                  <p>Clean and Structured Code for Web Crawlers</p>
                </li>
                <li>
                  <img src={checkmark} alt="" />

                  <p>Responsive Across Mobile, Tablet, & Desktop</p>
                </li>
              </ul>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className={styles["service-three"]}>
            <div className={styles.left}>
              <img src={ServiceImg3} alt="" />
            </div>
            <div className={styles.right}>
              <h2>Logos, Graphic Design, & Branding</h2>
              <p>
                We offer logo and graphic design through our in-house designer.
                Whether you're looking to update an existing logo or create a
                new one, we can help build your brand identity.
              </p>
              <ul>
                <li>
                  <h3>
                    <img src={checkmark} alt="" />
                    Logos Starting at $350</h3>
                  <p>
                    Rates may rise depending on the project's complexity, hours
                    required, and the number of revisions
                  </p>
                </li>
                <li>

                  <h3>
                  <img src={checkmark} alt="" />
                    Social Media Graphics</h3>
                  <p>
                    Create eye-catching posts with unique custom graphics. Call
                    us for details on rates and packages.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* --------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;
