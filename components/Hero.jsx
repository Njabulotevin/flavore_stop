import React from "react";
import { icons } from "./icons";
import styles from "../styles/Hero.module.scss";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <div className={styles.logo}>{icons.logo}</div>
        <div className={styles.menu}>{icons.Mobile_menu}</div>
      </div>
      <div className={styles.headline}>
        <h1>Let's meet at taste</h1>
        <h3>Today's Special</h3>
        <p>1/4 Chicken.............. R69.90</p>
        <p>1/4 Chicken.............. R69.90</p>
        <p>1/4 Chicken.............. R69.90</p>
        <p>1/4 Chicken.............. R69.90</p>
      </div>
    </div>
  );
}

export default Hero;
