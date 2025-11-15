import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenuCard = () => {
  const { resId } = useParams();
  const { resInfo, menuItems } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwo } = resInfo;
  console.log("menuItems", menuItems);
  return (
    <div className="w-6/12 mx-auto my-4">
      <h1 className="font-bold text-3xl mb-2">{name}</h1>
      <p className="font-bold text-xl mb-5">
        {cuisines?.join(", ")} - {costForTwo}
      </p>
      <div>
        {menuItems?.map((item, index) => (
          <RestaurantCategory
            key={item?.card?.card?.title}
            data={item}
            showItems={index === showIndex}
            setShowIndex={() =>
              index === showIndex ? setShowIndex(null) : setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
