import React, { useContext } from "react";
import Dish from "./Dish";
import { MenuContext } from "./MenuContextProvider";

function DishContainer() {
  const product = useContext(MenuContext);
  const { menu, active, dishValue, setDishValue } = product;
  console.log(menu, active);
  const tryMenu = () => {
    try {
      const menuRender = menu[active.toLowerCase()].map((item, index) => {
        return (
          <Dish
            key={index}
            title={item.title}
            options={item.options}
            dishValue={dishValue}
            optionsExtras={item.extraOptions}
            setDishValue={setDishValue}
            dishPrice={
              dishValue?.category === item.title ? dishValue.price : ""
            }
            imgUrl={item.imgUrl}
          />
        );
      });
      return menuRender;
    } catch (err) {
      return <h3>Oops! something went wrong</h3>;
    }
  };
  const renderMenu = tryMenu();

  return <div>{renderMenu}</div>;
}

export default DishContainer;
