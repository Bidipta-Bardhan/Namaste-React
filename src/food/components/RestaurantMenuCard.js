import { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    console.log(data);
    const json = await data.json();
      console.log(json);
      setResInfo(json?.data?.cards?.[2]?.card?.card.info)
      console.log(json?.data?.cards?.[2]?.card?.card.info);
      setMenuItems(
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards
      );
      console.log(
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards
      );
  };
  useEffect(() => {
    fetchData();
  }, []);
    if (resInfo === null) return <Shimmer />
    const {name, cuisines, costForTwo}=resInfo
    return (
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines?.join(", ")} - {costForTwo}
        </p>
        <h3>Menu</h3>
        <ul>
          {menuItems?.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.
              {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default RestaurantMenuCard;
