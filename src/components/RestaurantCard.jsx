import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restList }) => {
  return (
    <div
      data-testid="resCard"
      className="m-4 p-6 w-[250px] h-fit sm:h-[480px] border border-solid border-black shadow-lg"
    >
      <div>
        <img
          src={CDN_URL + restList?.info?.cloudinaryImageId}
          alt="restaurant item"
          className="rounded-lg w-[50%]] h-[100%]"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg py-3">{restList?.info?.name}</h3>
        <h4 className="text-md">{restList?.info?.cuisines.join(", ")}</h4>
        <h4>{restList?.info?.avgRating} stars</h4>
        <h4>{restList?.info?.costForTwo}</h4>
        <h4>{restList?.info?.sla.slaString}</h4>
      </div>
    </div>
  );
};

// High Order Component

export const withPromoteLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="bg-black text-white w-fit px-3 absolute">Promoted</h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
