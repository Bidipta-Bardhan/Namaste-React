import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center bg-green-100">
      <div>
        <img src={LOGO_URL} alt="logo" className="w-35"></img>
      </div>
      <div className="nav-items m-4 p-4">
        <ul className="flex justify-between items-center gap-4 text-xl">
          <li>Online Status:{onlineStatus ? "✅" : "🔴"} </li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>

          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/grocery"}>
            <li>Grocery</li>
          </Link>
          <Link to={"/cart"}>
            <li className="font-bold text-xl">Cart-{cartItems?.length}items</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
