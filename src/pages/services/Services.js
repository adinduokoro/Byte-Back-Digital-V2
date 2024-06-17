import React, { useEffect } from "react";
import styles from "./Services.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";

const Services = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(SET_CURRENT_PATH(id));

  const test = () => {
    return console.log(id)
  }

  useEffect(() => {
    test()
  })

  return (
    <div
      className={styles.services}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    ></div>
  );
};

export default Services;