import { useDispatch } from "react-redux";
import { RES_IMG_SRC } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  if (!items) return null;
  console.log(items);
  const dispatch = useDispatch();
  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="">
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="py-4 px-2 flex justify-between border-b-4 border-gray-200"
        >
          <div>
            <p>
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p>{item?.card?.info?.description}</p>
          </div>
          <div className="w-[150px] relative">
            <button
              className="left-1/2 -translate-x-1/2 absolute p-2 bg-black text-white cursor-pointer"
              onClick={() => handleAddClick(item)}
            >
              Add+
            </button>
            <img src={RES_IMG_SRC + item?.card?.info?.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
