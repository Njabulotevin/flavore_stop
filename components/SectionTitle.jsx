import React from "react";
import styles from "../styles/ContactForm.module.scss";

function SectionTitle({ title, subTitle, color }) {
  return (
    <div className="text_wrapper">
      <h4 style={{ color: `${color === "primary" ? "#274963" : "white"}` }}>
        {title}
      </h4>
      <p className={styles.subTitle}>{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
