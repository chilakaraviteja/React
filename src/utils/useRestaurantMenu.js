import { useEffect, useState } from "react";
import { RES_MENU } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU + resId);

    const json = await data.json();
    setResInfo(json?.data);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };
  return { resInfo, resMenu };
};

export default useRestaurantMenu;
