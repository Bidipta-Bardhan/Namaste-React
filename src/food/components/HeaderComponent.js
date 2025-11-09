import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();
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
          <Link>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent
