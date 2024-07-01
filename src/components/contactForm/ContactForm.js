import React, { useRef, useState } from "react";
import styles from "./ContactForm.module.css";
import contactImg from "../../assets/contact-image.svg";
import contactImgBlog from "../../assets/contact image blob.svg";
import { selectIsDarkModeOn } from "../../redux/slice/themeSlice";
import { useSelector } from "react-redux";
import { ContactImageBlob } from "../../assets/contact-image-blob";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser"

const ContactForm = ({ backgroundOn, contactDetailsOn, businessInputOn }) => {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  const form = useRef();
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const initialState = () => {
    setName("");
    setBusiness("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  async function sendEmail(e) {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      initialState();
      toast.success("Message Sent");
    } catch (error) {
      initialState();
      toast.error(error);
    }
  }

  return (
    <section className={styles["contact-form"]}>
      <div className="container">
        <div className={styles["contact-form-content"]}>
          <div className={styles.left}>
            {backgroundOn ? (
              <div className={styles["contact-background-image"]}>
                <ContactImageBlob />
              </div>
            ) : null}

            <form
              className={`${styles["form-contact"]} ${
                isDarkModeOn ? styles["form-contact-dark"] : ""
              }`}
              ref={form}
              onSubmit={sendEmail}
            >
              <h2>
                DROP <span>US A LINE</span>
              </h2>
              <input
                className={styles["form-input"]}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                maxLength={36}
                type="text"
              />
              {businessInputOn ? (
                <input
                  className={styles["form-input"]}
                  name="business"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Business"
                  maxLength={36}
                  type="text"
                />
              ) : null}

              <input
                className={styles["form-input"]}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                maxLength={50}
                type="email"
              />
              <input
                className={styles["form-input"]}
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                maxLength={21}
                type="phone"
              />
              <textarea
                className={styles["form-input"]}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          {contactDetailsOn ? (
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
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
