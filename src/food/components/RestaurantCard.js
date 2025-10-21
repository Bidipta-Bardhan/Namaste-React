import { RES_IMG_SRC } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card-container">
      <img
        className="img-res"
        src={
          RES_IMG_SRC +
          resData.info.cloudinaryImageId
        }
      ></img>
      <div>{resData.info.name}</div>
      <div>{resData.info.cuisines.join(", ")}</div>
      <div>{resData.info.avgRating} stars</div>
      <div>{resData.info.costForTwo}</div>
      <div>{resData.info.sla.deliveryTime} minutes</div>
    </div>
  );
};
export default RestaurantCard