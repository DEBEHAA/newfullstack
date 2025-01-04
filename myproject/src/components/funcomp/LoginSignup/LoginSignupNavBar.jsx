import "../../../assets/css/NavBar.css";
import { Link } from "react-router-dom";
var LSNavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default LSNavBar;