import React, { useContext } from "react";
import image from "next/image";
import styles from "../styles/Menu.module.scss";
import { MenuContext } from "./MenuContextProvider";

function MenuBox({ title, isActive, setIsMenuOn, data, value }) {
  const product = useContext(MenuContext);
  const { active, setActive, setMenu } = product;
  return (
    <div
      className={styles.menuBox}
      onClick={() => {
        setIsMenuOn(true);
        setActive(title);
        setMenu(data);
      }}
    >
      <div
        className={styles.boxImage}
        style={{
          backgroundImage: `url(/${value}.jpg)`,
          backgroundSize: "150%",
          backgroundPosition: "center",
        }}
      ></div>
      <h4 className={styles.boxTitle}>{title}</h4>
    </div>
  );
}

export default MenuBox;
