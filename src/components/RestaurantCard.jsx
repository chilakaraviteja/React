import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restList }) => {
  return (
    <div className="m-4 p-6 w-[250px] h-[450px] border border-solid border-black overflow-y-hidden shadow-lg">
      <img
        src={CDN_URL + restList.info?.cloudinaryImageId}
        alt="restaurant item"
        className="rounded-lg "
      />
      <div className="">
        <h3 className="font-bold text-lg py-3">{restList.info?.name}</h3>
        <h4 className="text-md">{restList.info?.cuisines.join(", ")}</h4>
        <h4>{restList.info?.avgRating} stars</h4>
        <h4>{restList.info?.costForTwo}</h4>
        <h4>{restList.info?.sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
