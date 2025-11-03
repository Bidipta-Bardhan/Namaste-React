import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const HeaderComponent = () => (
  <div className="header-container">
    <div className="logo-container">
      <img src={LOGO_URL} alt="logo" className="img-logo"></img>
    </div>
    <div className="nav-items">
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About Us</li>
        </Link>

        <Link to={"/contact"}>
          <li>Contact Us</li>
        </Link>

        <Link>
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  </div>
);
export default HeaderComponent
