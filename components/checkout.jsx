import React, { useContext, useState } from "react";
import DishOrder from "./DishOrder";
import styles from "../styles/Menu.module.scss";
import { icons } from "./icons";
import { MenuContext } from "./MenuContextProvider";

function Checkout() {
  const context = useContext(MenuContext);
  const { setActivity, dishValue, setDishValue } = context;
  const [customer, setCustomer] = useState({
    name: "",
    cellphone: "",
    address: { addressLine1: "", suburb: "", postalCode: "" },
  });
  return (
    <div className={styles.checkout_wrapper}>
      <h3>My Order</h3>
      <DishOrder price={dishValue.price} title={dishValue.label} />

      <hr />
      <div className={styles.total_wrapper}>
        <h4>TOTAL:</h4>
        <h4>R{dishValue.price * dishValue.qty}</h4>
      </div>
      <hr />

      <form action="">
        <h4>Customer Details</h4>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            onChange={(e) => {
              setCustomer({ ...customer, name: e.target.value });
            }}
            value={customer.name}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="number">Cellphone Number</label>
          <input
            type="text"
            onChange={(e) => {
              setCustomer({ ...customer, cellphone: e.target.value });
            }}
            value={customer.cellphone}
          />
        </div>

        <h4>Delivery Address</h4>
        <div className={styles.inputWrapper}>
          <label htmlFor="street">Address Line 1</label>
          <input
            type="text"
            required
            onChange={(e) => {
              setCustomer({
                ...customer,
                address: { ...customer.address, addressLine1: e.target.value },
              });
            }}
            value={customer.address.addressLine1}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="suburb">Suburb</label>
          <input
            type="text"
            onChange={(e) => {
              setCustomer({
                ...customer,
                address: { ...customer.address, suburb: e.target.value },
              });
            }}
            value={customer.address.suburb}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Postal Code</label>
          <input
            type="text"
            onChange={(e) => {
              setCustomer({
                ...customer,
                address: { ...customer.address, postalCode: e.target.value },
              });
            }}
            value={customer.address.postalCode}
          />
        </div>
      </form>
      <div className={styles.delivery}>
        <div className={styles.clock_icon}>{icons.stop_watch}</div>
        <div className={styles.deliveryInfo}>
          <h3>Fast Delivery</h3>
          <p>Order delivered within 1 hour</p>
        </div>
      </div>
      <button
        className={styles.checkout_btn}
        onClick={() => {
          console.log(JSON.stringify(dishValue), customer);
          var url = "https://api.whatsapp.com/send";
          var text = `Customer: ${JSON.stringify(
            customer
          )} order: ${JSON.stringify(dishValue)}`;
          window.open(
            url + "?phone=+27672929455&text=" + encodeURIComponent(text)
          );
          
        }}
      >
        Place Order
      </button>
      <button
        onClick={() => {
          setActivity("menu");
        }}
        className={styles.cancel_btn}
      >
        Cancel
      </button>
    </div>
  );
}

export default Checkout;
