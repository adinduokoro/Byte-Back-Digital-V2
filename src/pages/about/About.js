import React, { useEffect } from "react";
import styles from "./About.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";

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
      

    </div>
  );
};

export default About;
