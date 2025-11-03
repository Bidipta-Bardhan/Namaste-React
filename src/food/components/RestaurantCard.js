import { useNavigate } from "react-router-dom";
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
      className="res-card-container"
      onClick={() => goToMenuDetailsPage(id) }
    >
      <img
        className="img-res"
        src={RES_IMG_SRC + cloudinaryImageId}
      ></img>
      <div>{name}</div>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating} stars</div>
      <div>{costForTwo}</div>
      <div>{sla.deliveryTime} minutes</div>
    </div>
  );
};
export default RestaurantCard