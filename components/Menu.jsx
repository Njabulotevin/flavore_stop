import React, { useContext, useState } from "react";
import styles from "../styles/Menu.module.scss";
import DishContainer from "./DishContainer";
import { icons } from "./icons";
import MenuBox from "./MenuBox";
import { MenuContext } from "./MenuContextProvider";

function Menu({ data }) {
  const product = useContext(MenuContext);
  const { categories, active, setMenu } = product;
  const [isMenuOn, setIsMenuOn] = useState(false);

  return (
    <div >
      {isMenuOn && (
        <div className={styles.header_arrow}>
          <span
            onClick={() => {
              setIsMenuOn(false);
            }}
            className={styles.arrow_back}
          >
            {icons.arrow_back}
          </span>
          <h3>{active}</h3>
        </div>
      )}
      <div className={styles.heading}>{!isMenuOn && <h2>Our Menu</h2>}</div>
      {!isMenuOn && (
        <div className={styles.menuWrapper}>
          {categories.map((category, index) => {
            return (
              <MenuBox
                setIsMenuOn={setIsMenuOn}
                key={index}
                title={category.label}
                data={data}
                value={category.value}
              />
            );
          })}
        </div>
      )}
      {isMenuOn && <DishContainer />}
    </div>
  );
}

export default Menu;
