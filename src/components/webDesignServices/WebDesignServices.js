import React from "react";
import styles from "./WebDesignServices.module.css";
import ServiceImg1 from "../../assets/service-img-1.svg";
import ServiceImg2 from "../../assets/service-img-2.svg";
import ServiceImg3 from "../../assets/service-img-3.svg";

const WebDesignServices = () => {
  return (
    <section className={styles["web-design-services"]}>
      <div className="container">
        <div className={styles["web-design-services-content"]}>
          
          
          
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
              </p>
              <p>
                Handcrafted websites outperform most WordPress and drag-and-drop
                builder sites, which can be costly. In the online world, speed
                and organization are key to winning.
              </p>
            </div>
          </div>



          <div className={styles["service-one"]}>
            <div className={styles.left}>
              <img src={ServiceImg2} alt="" />
            </div>
            <div className={styles.right}>
              <h2>Search Engine Optimization For 2024</h2>
              <p>
                Our development process is unique because we avoid WordPress,
                frameworks, and page builders. We handcraft each line of code,
                ensuring full control over the design and optimal performance
                without the bloat that slows down other sites
              </p>
              <p>
                Handcrafted websites outperform most WordPress and drag-and-drop
                builder sites, which can be costly. In the online world, speed
                and organization are key to winning.
              </p>
            </div>
          </div>



          <div className={styles["service-one"]}>
            <div className={styles.left}>
              <img src={ServiceImg3} alt="" />
            </div>
            <div className={styles.right}>
              <h2>Logos, Graphic Design, & Branding</h2>
              <p>
                Our development process is unique because we avoid WordPress,
                frameworks, and page builders. We handcraft each line of code,
                ensuring full control over the design and optimal performance
                without the bloat that slows down other sites
              </p>
              <p>
                Handcrafted websites outperform most WordPress and drag-and-drop
                builder sites, which can be costly. In the online world, speed
                and organization are key to winning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;
