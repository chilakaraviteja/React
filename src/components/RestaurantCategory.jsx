import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className="w-[100%] shadow-lg my-2  p-4 flex flex-col justify-between border border-gray-200">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="font-medium">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {isClicked ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {isClicked && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
