import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenu(resId);

  const restaurantDetails = resInfo?.cards[2]?.card?.card?.info;

  if (resInfo === null) return <Shimmer />;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-4 p-4">
      <div className="flex justify-around">
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            {resInfo?.cards[0]?.card?.card?.text}
          </h1>
          <p className="text-md">
            {restaurantDetails?.cuisines.join(", ")} -{" "}
            {restaurantDetails?.costForTwoMessage}
          </p>
          <p className="text-md">
            {restaurantDetails?.areaName} - {restaurantDetails?.city}
          </p>
        </div>
        <p className="text-md">{restaurantDetails?.avgRating}⭐</p>
      </div>
      <div className="flex flex-col w-[45%] mx-auto">
        {categories?.map((category, idx) => (
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card?.itemCards[idx]?.card?.info?.id}
            showItems={idx === showItems ? true : false}
            setShowItems={() => setShowItems(showItems !== idx ? idx : null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
