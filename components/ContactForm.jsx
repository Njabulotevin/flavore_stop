import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "../styles/ContactForm.module.scss";

function ContactForm() {
  return (
    <div className={styles.wrapper}>
      <SectionTitle
        title="Get in Touch"
        subTitle="Have an inquiry or some feedback for us? 
                    Fill the form below to contact our team."
        color="white"
      />

      <form action="">
        <div className={styles.name_surname}>
          <div className="">
            <label htmlFor="name">First Name</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Enter your First Name"
            />
          </div>
          <div className="">
            <label htmlFor="surname">Surname</label>
            <input
              className={styles.input}
              type="text"
              name="surname"
              placeholder="Enter your Surname"
            />
          </div>
        </div>

        <label htmlFor="email">Email Address</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email address"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className={styles.input}
          name="message"
          id=""
          cols="24"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
