import React, { useContext } from "react";
import styles from "../styles/Dish.module.scss";
import Select from "react-select";
import { MenuContext } from "./MenuContextProvider";

function Dish({
  options,
  dishValue,
  optionsExtras,
  title,
  setDishValue,
  dishPrice,
  imgUrl,
}) {
  const context = useContext(MenuContext);
  const { setActivity } = context;
  return (
    <div className={styles.wrapper}>
      <div className={styles.topWrapper}>
        <h2>{title}</h2>
      </div>
      <div className={styles.options}>
        <div className={styles.selectWrapper}>
          <Select
            className={styles.select}
            class
            options={options}
            placeholder="Select dish.."
            defaultValue={dishValue}
            onChange={setDishValue}
          />
          <Select
            className={styles.select}
            options={optionsExtras}
            isMulti
            placeholder="Add Extras.."
          />
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.totalPrce}>
            <p>Total Price</p>
            <h4>{dishValue ? `R${dishPrice}` : "Choose dish"}</h4>
          </div>
          <button
            onClick={() => {
              setActivity("checkout");
              console.log(dishValue);
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dish;
