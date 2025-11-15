import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data?.cards?.[2]?.card?.card.info);
    const menuLists =
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (item) => item && Object.keys(item).length > 0
      );
    setMenuItems(menuLists);
  };
  return { resInfo, menuItems };
};
export default useRestaurantMenu;
