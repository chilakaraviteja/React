import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_IMG, RES_MENU } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU + resId);

    const json = await data.json();
    setResInfo(json?.data);
    setResMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  return (
    <>
      {resInfo?.length === 0 ? (
        <Shimmer />
      ) : (
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
      )}
    </>
  );
};

export default RestaurantMenu;
