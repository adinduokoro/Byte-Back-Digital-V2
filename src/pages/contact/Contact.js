import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { useParams } from "react-router-dom";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { useDispatch } from "react-redux";

const Contact = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  dispatch(SET_CURRENT_PATH(id));

  return (
    <div
      className={styles.contact}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    ></div>
  );
};

export default Contact;
