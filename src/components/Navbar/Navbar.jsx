import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-app">
      <div className="menu">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/wedding-restaurant-manager/staff-manager"}>
              Staff Manager
            </Link>
          </li>
          <li>Wedding Hall</li>
          <li>Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
