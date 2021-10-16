import React, { useContext, useState } from "react";
import { Image } from "next/image";
import styles from "../styles/Dish.module.scss";
import { MenuContext } from "./MenuContextProvider";

function DishOrder({ price, title, handleQty, qty }) {
  const context = useContext(MenuContext);
  const { setDishValue, dishValue } = context;
  return (
    <div className={styles.orderDish}>
      <div
        className={styles.orderImage}
        style={{ backgroundImage: "url(/wings.jpg)", backgroundSize: "100%" }}
      ></div>
      <div className={styles.title_qty}>
        <h5>{title}</h5>
        <div className={styles.dishQty}>
          <button
            onClick={() => {
              setDishValue({ ...dishValue, qty: dishValue.qty + 1 });
            }}
          >
            +
          </button>
          <span>{dishValue.qty}</span>
          <button
            onClick={() => {
              dishValue.qty === 1
                ? null
                : setDishValue({ ...dishValue, qty: dishValue.qty - 1 });
            }}
          >
            -
          </button>
        </div>
      </div>

      <p>R{price * dishValue.qty}</p>
    </div>
  );
}

export default DishOrder;
