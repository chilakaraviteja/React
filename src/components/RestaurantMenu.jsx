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
    <div className="m-4 p-4">
      <div className="flex justify-between space-x-2">
        <h1 className="text-xl font-bold">
          {resInfo?.cards[0]?.card?.card?.text}
        </h1>
        <p>{resInfo?.cards[1]?.card?.card?.tabs[0]?.title}</p>
      </div>
      <div className="flex flex-wrap ">
        {resMenu?.map((menu) => (
          <div
            className="m-4 p-6 w-[250px] border border-solid border-black overflow-y-hidden shadow-lg"
            key={menu?.card?.info?.id}
          >
            <img src={MENU_IMG + menu?.card?.info?.imageId} alt="item img" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">{menu?.card?.info?.name}</p>
              <p className="text-lg font-bold">
                {menu?.card?.info?.ratings?.aggregatedRating?.rating}⭐
              </p>
            </div>
            <p className="text-md">
              £{menu?.card?.info?.price || menu?.card?.info?.defaultPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
