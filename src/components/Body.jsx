import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST } from "../utils/constant";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // to enable cors without chrome extension use
  //https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=16.5061743&lng=80.6480153&isDineoutCollection=false
  const fetchData = async () => {
    const data = await fetch(REST);
    const json = await data.json();
    setRestData(
      json.data.success.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredData(
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
              setFilteredData(filteredSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            // Need to fix this
            setRestData(restList.filter((res) => res?.info?.avgRating < 4));
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
            <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
              <RestaurantCard restList={rest} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
