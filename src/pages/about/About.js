import React, { useEffect } from "react";
import styles from "./About.module.css";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";
import { AboutContact, AboutUs, QualityQuantity } from "../../components";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_CURRENT_PATH("about"));
  }, [dispatch]);

  return (
    <div
      className={styles.about}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    >
      <AboutUs />
      <QualityQuantity />
      <AboutContact />
    </div>
  );
};

export default About;
