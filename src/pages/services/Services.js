import React from "react";
import styles from "./Service.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";

const Services = () => {
  const { services } = useParams();
  const dispatch = useDispatch();

  dispatch(SET_CURRENT_PATH(services));

  return (
    <div
      className={styles.services}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    ></div>
  );
};

export default Services;