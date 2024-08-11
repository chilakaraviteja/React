import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestuarantCard";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, seetFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=16.5061743&lng=80.6480153&isDineoutCollection=false"
    );
    const json = await data.json();
    setRestData(
      json.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            className="search-input"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredSearch = restData.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              seetFilteredData(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            setRestData(restList.filter((res) => res?.info?.avgRating > 4.3));
          }}
          className="filter-btn"
        >
          Top Rated Button
        </button>
      </div>
      {restData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {/* we should not use index in map */}
          {filteredData.map((rest) => (
            <RestaurantCard restList={rest} key={rest?.info?.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
