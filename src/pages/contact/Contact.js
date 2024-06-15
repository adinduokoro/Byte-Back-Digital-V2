import React from "react";
import { Navigation, PageHeader } from "../../components";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div
      className={styles.contact}
      style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
    >
      <PageHeader title={"Contact Us"} />
    </div>
  );
};

export default Contact;
