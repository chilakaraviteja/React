import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  return (
    <div>
      <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
      <p>{resInfo?.cards[1]?.card?.card?.tabs[0]?.title}</p>
      {resMenu?.map((menu) => (
        <div className="menu-item" key={menu?.card?.info?.id}>
          <img src={MENU_IMG + menu?.card?.info?.imageId} alt="item img" />
          <p>{menu?.card?.info?.name}</p>
          <p>£{menu?.card?.info?.defaultPrice}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
