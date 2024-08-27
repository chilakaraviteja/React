import React from "react";
import { MENU_IMG } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className=" p-4 border-b-2">
          <div className="flex justify-between">
            <div className="w-9/12 mr-4">
              <p className="text-lg font-bold">{item?.card?.info?.name}</p>
              <p className="text-sm font-bold">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}⭐
              </p>
              <p className="text-xs">{item?.card?.info?.description}</p>
              <p className="text-md">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
            </div>
            <div className="w-3/12 relative">
              <div className="absolute top-20 left-3">
                <button className=" bg-green-500 text-white px-4 rounded-md">
                  ADD +
                </button>
              </div>
              <img
                src={MENU_IMG + item?.card?.info.imageId}
                alt="item img"
                className="w-[100px] h-[100px] rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
