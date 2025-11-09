import { RES_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { withVeg } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
// useState use difference algorithm for virtual dom, which spot difference and render quickly so that   UI and data layer is in sync
const Body = () => {
  /**
   * Always have useState variables at the start of component
   * Do not write state variables inside if, for or functions it is used for DOM manipulation
   */
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListRes, setFilterListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  /**
   *  Use effect without any dependency array will get called on every render of component
   *  Use effect with empty dependency array will get called only once on initial load
   *  Use effect with a state variable on depency array will get called every time that variable gets updated
   * */
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurants(
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListRes(
      json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(filterListRes);
  const RestaurantCardVeg = withVeg(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return <h1>You are offline!! Please check your internet connectivity</h1>
  return filterListRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container m-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className=" border border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-amber-100 p-2 rounded-md hover:scale-110"
            onClick={() => {
              const searchList = listOfRestaurants.filter((item) =>
                item?.info?.name
                  ?.toLowerCase()
                  .includes(searchText?.toLowerCase())
              );
              setFilterListRes(searchList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-pink-100 p-2 rounded-md hover:scale-110"
          onClick={() => {
            const filteredResList = listOfRestaurants.filter(
              (item) => item.info.avgRating >= 4.5
            );
            setFilterListRes(filteredResList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
          {filterListRes.map((resObj) => {
            return resObj?.info?.veg ? (
              <RestaurantCardVeg key={resObj.info.id} resData={resObj} />
            ) : (
              <RestaurantCard key={resObj.info.id} resData={resObj} />
            );
        })}
      </div>
    </div>
  );
};
export default Body;
