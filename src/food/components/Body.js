import resDataArray from "../utils/restaurant-mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
// useState use difference algorithm for virtual dom, which spot difference and render quickly so that   UI and data layer is in sync
const Body = () => {
    const [listOfRestaurants,setListOfRestaurants]=useState(resDataArray)
    return (
        <div className="body-container">
            <button className="filter-btn" onClick={() => {
                const filteredResList = listOfRestaurants.filter(
                  (item) => item.info.avgRating>4.5
                );
                setListOfRestaurants(filteredResList)
            }} >Top Rated Restaurant</button>
            <div className="res-container">
                {listOfRestaurants.map((resObj) => {
                    return <RestaurantCard key={resObj.info.id} resData={resObj} />;
                })}
            </div>
        </div>
    )
};
export default Body;
