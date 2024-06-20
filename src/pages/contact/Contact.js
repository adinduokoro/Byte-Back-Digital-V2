import React from "react";
import styles from "./Contact.module.css";

import { ContactForm } from "../../components";

const Contact = () => {
 
    return (
        <div
            className={styles.contact}
            style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
        >
            <ContactForm />
        </div>
    );
};

export default Contact;
