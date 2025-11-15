import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="mb-4 font-bold text-2xl">Cart</h2>
        {cartItems.length !== 0 && (
          <button
            className="p-2 text-white bg-red-500 rounded-lg cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <p className="font-bold text-xl">
          Oh! your cart is empty 🥹. Please add something 😇 !!!!
        </p>
      )}
      <ItemList items={cartItems} />
    </div>
  );
};
export default Cart;
