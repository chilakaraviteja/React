import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restList }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restList;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="pizza" />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
