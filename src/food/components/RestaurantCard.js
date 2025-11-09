import { useNavigate } from "react-router";
import { RES_IMG_SRC } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const navigate = useNavigate();
  function goToMenuDetailsPage(resId) {
    console.log("function called", resId);
    navigate("/restaurants/" + resId);
  }
  const { id, name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      className="res-card-container bg-gray-100 p-4 w-60 rounded-md hover:bg-gray-200"
      onClick={() => goToMenuDetailsPage(id) }
    >
      <img
        className="h-50 rounded-lg w-full"
        src={RES_IMG_SRC + cloudinaryImageId}
      ></img>
      <div className="font-bold text-lg">{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating} stars</div>
      <div>{costForTwo}</div>
      <div>{sla.deliveryTime} minutes</div>
    </div>
  );
};
// Higher Order Component is a JS function which takes a component
// and returns a component
export const withVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-200 p-2 rounded-lg">Pure Veg</label>
        <RestaurantCard {...props} />
      </div>
    )
  } 
}
export default RestaurantCard