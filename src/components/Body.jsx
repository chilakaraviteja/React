import React, { useState } from "react";
import RestaurantCard from "./RestuarantCard";
import restList from "../utils/mockData";

const Body = () => {
  const [restData, setRestData] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            setRestData(restList.filter((res) => res.avgRating > 4.3));
          }}
          className="filter-btn"
        >
          Top Rated Button
        </button>
      </div>
      <div className="res-container">
        {/* we should not use index in map */}
        {restData.map((rest, idx) => (
          <RestaurantCard restList={rest} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Body;
