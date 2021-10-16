import React, { useState } from "react";
import axios from "axios";

export const MenuContext = React.createContext({});

function MenuContextProvider({ children }) {
  const categories = [
    { value: "chicken", label: "Chicken" },
    { value: "quick_bowls", label: "Quick Bowls" },
    { value: "wings", label: "Wings" },
    { value: "burgers", label: "Burgers" },
    { value: "salads", label: "Salads" },
  ];
  const [dishValue, setDishValue] = useState(null);
  const [active, setActive] = useState("chicken");
  const [menu, setMenu] = useState(null);
  const [activity, setActivity] = useState("menu");
  const [qty, setQty] = useState(1);
  const value = {
    setDishValue,
    dishValue,
    categories,
    active,
    setActive,
    setMenu,
    menu,
    activity,
    setActivity,
    qty,
    setQty,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export default MenuContextProvider;
