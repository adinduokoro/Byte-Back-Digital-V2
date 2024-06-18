import React from "react";
import styles from "./ContactForm.module.css";
import contactImg from "../../assets/contact-image.svg";
import contactImgBlog from "../../assets/contact image blob.svg";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { ContactImageBlob } from "../../assets/contact-image-blob";

const ContactForm = () => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <section className={styles["contact-form"]}>
      <div className="container">
        <div className={styles["contact-form-content"]}>
          <div className={styles.left}>
            <div className={styles["contact-background-image"]}>
              <ContactImageBlob />
            </div>
            <form
              className={`${styles["form-contact"]} ${
                isDarkModeOn ? styles["form-contact-dark"] : ""
              }`}
            >
              <h2>
                DROP <span>US A LINE</span>
              </h2>
              <input
                className={styles["form-input"]}
                name="name"
                placeholder="Name"
                maxLength={36}
                type="text"
              />
              <input
                className={styles["form-input"]}
                name="business"
                placeholder="Business"
                maxLength={36}
                type="text"
              />
              <input
                className={styles["form-input"]}
                name="email"
                placeholder="Email Address"
                maxLength={50}
                type="email"
              />
              <input
                className={styles["form-input"]}
                name="phone"
                placeholder="Phone Number"
                maxLength={21}
                type="phone"
              />
              <textarea
                className={styles["form-input"]}
                name="message"
                type="text"
                placeholder="Type your message here..."
                rows={4}
                cols={40}
                maxLength={200}
              />
              <button
                className={`btn-two ${isDarkModeOn ? "btn-two-dark" : ""}`}
              >
                Submit
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <img src={contactImg} alt={""} />
            <div className={styles.email}>
              <p>Email:</p>
              <p>bytebackdigital@gmail.com</p>
            </div>
            <div className={styles.phone}>
              <p>Phone:</p>
              <p>+1 (410) 870-5676</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
