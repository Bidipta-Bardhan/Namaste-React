import resDataArray from "../utils/restaurant-mockdata";
import RestaurantCard from "./RestaurantCard";
const Body = () => (
  <div className="body-container">
    <div className="search-bar">Search</div>
    <div className="res-container">
      {resDataArray.map((resObj) => {
        return <RestaurantCard key={resObj.info.id} resData={resObj} />;
      })}
    </div>
  </div>
);
export default Body