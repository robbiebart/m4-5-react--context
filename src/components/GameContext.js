import React from "react";
import useInterval from "../hooks/use-interval.hook";
import { items } from "../data";
export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
  const [numCookies, setNumCookies] = React.useState(() => {
    const cookieStorage = window.localStorage.getItem("numCookies");
    console.log(cookieStorage);
    if (cookieStorage === null) {
      return 1000;
    } else {
      return JSON.parse(cookieStorage);
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem("numCookies", JSON.stringify(numCookies));
  }, [numCookies]);
  const [purchasedItems, setPurchasedItems] = React.useState(() => {
    const itemStorage = window.localStorage.getItem("purchasedItems");
    if (itemStorage === null) {
      return {
        cursor: 0,
        grandma: 0,
        farm: 0,
      };
    } else {
      return JSON.parse(itemStorage);
    }
  });

  React.useEffect(() => {
    window.localStorage.setItem(
      "purchasedItems",
      JSON.stringify(purchasedItems)
    );
  }, [numCookies]);
  const calculateCookiesPerSecond = (purchasedItems) => {
    return Object.keys(purchasedItems).reduce((acc, itemId) => {
      const numOwned = purchasedItems[itemId];
      const item = items.find((item) => item.id === itemId);
      const value = item.value;
      return acc + value * numOwned;
    }, 0);
  };
  useInterval(() => {
    const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);
  return (
    <GameContext.Provider
      value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        calculateCookiesPerSecond,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
