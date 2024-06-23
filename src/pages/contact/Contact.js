import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { SET_CURRENT_PATH } from "../../redux/slice/linkSlice";
import { ContactForm } from "../../components";

const Contact = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SET_CURRENT_PATH("contact"));
    }, [dispatch]);

    return (
        <div
            className={styles.contact}
            style={{ backgroundColor: "var(--primaryBackgroundColor)" }}
        >
            <ContactForm backgroundOn={true} contactDetailsOn={true} businessInputOn={true}/>
        </div>
    );
};

export default Contact;
