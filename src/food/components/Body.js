import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
// useState use difference algorithm for virtual dom, which spot difference and render quickly so that   UI and data layer is in sync
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListRes, setFilterListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.4600098&lng=88.38217069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListRes(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return filterListRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-filter">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
                      <button onClick={() => {
                        const searchList = listOfRestaurants.filter(
                          (item) => item?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
                          );  
                          setFilterListRes(searchList);
          }} >Search</button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filterListRes.map((resObj) => {
          return <RestaurantCard key={resObj.info.id} resData={resObj} />;
        })}
      </div>
    </div>
  );
};
export default Body;
