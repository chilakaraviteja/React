import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restList }) => {
  return (
    <div className="res-card">
      <img src={CDN_URL + restList.info?.cloudinaryImageId} alt="restaurant item" />
      <div className="res-content">
        <h3>{restList.info?.name}</h3>
        <h4>{restList.info?.cuisines.join(", ")}</h4>
        <h4>{restList.info?.avgRating} stars</h4>
        <h4>{restList.info?.costForTwo}</h4>
        <h4>{restList.info?.sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
