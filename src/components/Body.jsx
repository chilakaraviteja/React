import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromoteLabel } from "./RestaurantCard";
import restList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { REST } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restData, setRestData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const LabeledRestaurantCard = withPromoteLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please Check your internet connection...</h1>;
  return (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4 space-x-2">
          <input
            type="text"
            name="search"
            id="search"
            className="border border-solid border-black px-4 py-1"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="px-4 py-1 border border-solid border-black"
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
        <div>
          <button
            onClick={() => {
              // Need to fix this
              setRestData(restList.filter((res) => res?.info?.avgRating < 4));
            }}
            className="px-4 py-1 border border-solid border-black rounded-md"
          >
            Top Rated Button
          </button>
        </div>
      </div>
      {restData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap ">
          {/* we should not use index in map */}
          {filteredData.map((rest) => (
            <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
              {rest?.data?.promoted ? (
                <LabeledRestaurantCard restList={rest} />
              ) : (
                <RestaurantCard restList={rest} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
