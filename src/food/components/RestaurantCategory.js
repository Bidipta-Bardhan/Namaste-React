import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const cardDetails = data?.card?.card;
  if (!cardDetails) return null;
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="mb-4 p-2.5 rounded-lg bg-gray-100 shadowd-md">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold">
          {cardDetails?.title} ({cardDetails?.itemCards?.length}){" "}
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={cardDetails?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
