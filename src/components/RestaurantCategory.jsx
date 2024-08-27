import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  return (
    <div>
      <div className="w-[100%] shadow-lg my-2 p-4 flex flex-col justify-between border border-gray-200">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowItems()}
        >
          <span className="font-medium">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
