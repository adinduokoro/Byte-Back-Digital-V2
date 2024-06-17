import React, { useEffect } from "react";
import styles from "./Services.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SET_CURRENT_PATH("services"));
}, [dispatch]);

  return (
    <div
      className={styles.services}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    ></div>
  );
};

export default Services;