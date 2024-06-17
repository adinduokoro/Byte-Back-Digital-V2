import React, { useEffect } from "react";
import styles from "./About.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";
import { CustomerPlanOptions } from "../../components";

const About = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(SET_CURRENT_PATH(id));

  return (
    <div
      className={styles.about}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    >
      <CustomerPlanOptions />
    </div>
  );
};

export default About;
